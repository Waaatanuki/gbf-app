import { evokerData } from "./uncapData";
import { newEvokerInfo, critData } from "./data";
import dayjs from "dayjs";
const getEvokerPageResult = function (e, v) {
    let result = {};
    let loopGroup = ["tarotUncap", "evokerUncap", "weaponUncap", "domainUncap"];

    for (let i = 0; i < 10; i++) {
        if (e[i].target) {
            let currentNo = e[i].no;
            let currentTarotLevel = e[i].tarotLevel || 0;
            let currentEvokerLevel = e[i].evokerLevel || 0;
            let currentWeaponLevel = e[i].weaponLevel || 0;
            let currentDomainLevel = e[i].domainLevel || 0;
            let currentLevel = [currentTarotLevel, currentEvokerLevel, currentWeaponLevel, currentDomainLevel];

            // 塔罗卡片交换
            if (!e[i].getCard) {
                let tarotCardData = evokerData[currentNo].tarotCard;
                for (const k in tarotCardData) {
                    if (isNaN(result[k])) {
                        result[k] = 0;
                    }
                    result[k] += tarotCardData[k];
                }
            }
            // 塔罗、贤者、贤武、领域素材计算
            for (let m = 0; m < 4; m++) {
                for (let j = currentLevel[m]; j < evokerData[currentNo][loopGroup[m]].length; j++) {
                    let uncapData = evokerData[currentNo][loopGroup[m]][j];
                    for (const k in uncapData) {
                        if (isNaN(result[k])) {
                            result[k] = 0;
                        }
                        result[k] += uncapData[k];
                    }
                }
            }
        }
    }
    // 计算素材缺口
    for (const k in v) {
        if (result[k]) {
            result[k] -= v[k];
            if (result[k] <= 0) {
                delete result[k];
            }
        }
    }
    return result;
};

const getEvokerPagePercent = function (e, v, ratio) {
    let total = {};
    let totalNum = 0;

    let loopGroup = ["tarotUncap", "evokerUncap", "weaponUncap", "domainUncap"];

    // 计算目标贤者全部所需素材
    for (let i = 0; i < 10; i++) {
        if (e[i].target) {
            let currentNo = e[i].no;
            let currentLevel = [0, 0, 0, 0];

            let tarotCardData = evokerData[currentNo].tarotCard;
            for (const k in tarotCardData) {
                if (isNaN(total[k])) {
                    total[k] = 0;
                }
                total[k] += tarotCardData[k];
            }
            for (let m = 0; m < 4; m++) {
                for (let j = currentLevel[m]; j < evokerData[currentNo][loopGroup[m]].length; j++) {
                    let uncapData = evokerData[currentNo][loopGroup[m]][j];
                    for (const k in uncapData) {
                        if (isNaN(total[k])) {
                            total[k] = 0;
                        }
                        total[k] += uncapData[k];
                    }
                }
            }
        }
    }
    // 全部换算为紫英
    for (const k in total) {
        totalNum += total[k] * ratio[k];
    }

    // 计算素材缺口
    let result = getEvokerPageResult(e, v);
    let resultNum = 0;
    for (const k in v) {
        if (result[k]) {
            result[k] -= v[k];
            if (result[k] <= 0) {
                delete result[k];
            }
        }
    }
    for (const k in result) {
        resultNum += result[k] * ratio[k];
    }

    return (100 - (resultNum / totalNum) * 100).toFixed(2);
};

const getFlag = function (evokerInfo) {
    let flag = 0;
    evokerInfo.forEach(e => {
        if (e.target) {
            flag = 1;
        }
    });
    return flag;
};

const getRatio = function () {
    const allMaterial = getEvokerPageResult(newEvokerInfo, {});
    const ratio = {};
    for (const k in allMaterial) {
        ratio[k] = allMaterial[k] / allMaterial[25074];
    }
    return ratio;
};
// 所有暴击选项
const getCritCalcResult = function (inputInfo) {
    let boostLevel = [inputInfo[0][0] + inputInfo[1], inputInfo[0][1]];
    let result = [];
    for (let i = 0; i < critData.length; i++) {
        let element = { ...critData[i] };
        if (element.boosted != false) {
            for (let index = 0; index < boostLevel.length; index++) {
                if (boostLevel[index] != 0) {
                    if (element.kamiOnly && index == 1) continue;
                    if (element.waterOnly && !inputInfo[3]) continue;
                    if (element.magunaOnly && index == 0) continue;
                    if (element.sekiyu && !inputInfo[4]) continue;
                    element.boostRate = Number((((boostLevel[index] + 100) / 100) * element.rate).toFixed(2));
                    result.push(JSON.parse(JSON.stringify(element)));
                }
            }
        } else {
            if (element.waterOnly && !inputInfo[3]) continue;
            if (element.sandboxOnly && !inputInfo[2]) continue;
            element.boostRate = element.rate;
            result.push(JSON.parse(JSON.stringify(element)));
        }
    }
    return result;
};
const getBestThreeWeaponCrit = function (result) {
    // 三把武器
    let threeWeaponTemp = [];
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result.length; j++) {
            for (let k = 0; k < result.length; k++) {
                let totalRate = result[i].boostRate + result[j].boostRate + result[k].boostRate;
                if (totalRate > 95 && totalRate < 105)
                    threeWeaponTemp.push(
                        JSON.stringify(
                            [
                                totalRate.toFixed(2),
                                JSON.stringify(result[i]),
                                JSON.stringify(result[j]),
                                JSON.stringify(result[k]),
                            ].sort()
                        )
                    );
            }
        }
    }
    // 去重后的json数组
    let threeWeaponResult = [...new Set(threeWeaponTemp)];
    for (let i = 0; i < threeWeaponResult.length; i++) {
        threeWeaponResult[i] = JSON.parse(threeWeaponResult[i]);
        for (let j = 0; j < threeWeaponResult[i].length; j++) {
            threeWeaponResult[i][j] = JSON.parse(threeWeaponResult[i][j]);
        }
    }

    return threeWeaponResult.sort((a, b) => b[0] - a[0]);
};

/**
 * Export all data from an IndexedDB database
 * @param {IDBDatabase} idbDatabase - to export from
 * @param {function(Object?, string?)} cb - callback with signature (error, jsonString)
 */
// function exportToJson(storeName) {
//     const DBOpenRequest = window.indexedDB.open("gbfApp");
//     let db;
//     const allObjects = [];
//     DBOpenRequest.onupgradeneeded = function (event) {
//         db = event.target.result;
//         if (!db.objectStoreNames.contains(storeName)) {
//             db.createObjectStore(storeName);
//         }
//     };
//     DBOpenRequest.onsuccess = async function (event) {
//         db = DBOpenRequest.result;

//         const exportObject = {};
//         const objectStoreNamesSet = new Set(db.objectStoreNames);
//         const size = objectStoreNamesSet.size;
//         if (size === 0) {
//             return null;
//         } else {
//             const transaction = db.transaction(storeName, "readonly");
//             transaction.onerror = event => null;

//             transaction.objectStore(storeName).openCursor().onsuccess = event => {
//                 const cursor = event.target.result;
//                 const item = {};
//                 if (cursor) {
//                     item[cursor.key] = cursor.value;
//                     allObjects.push(item);
//                     cursor.continue();
//                 }
//             };
//         }
//     };
//     return allObjects;
// }
function exportToJson(cb) {
    const DBOpenRequest = window.indexedDB.open("gbfApp");
    let db;

    DBOpenRequest.onupgradeneeded = function (event) {
        db = event.target.result;
        if (!db.objectStoreNames.contains("GoldBrick")) {
            db.createObjectStore("GoldBrick");
        }
    };
    DBOpenRequest.onsuccess = async function (event) {
        db = DBOpenRequest.result;

        const exportObject = {};
        const objectStoreNamesSet = new Set(["GoldBrick"]);
        // const objectStoreNamesSet = new Set(db.objectStoreNames);
        const size = objectStoreNamesSet.size;
        if (size === 0) {
            cb(null, exportObject);
        } else {
            const objectStoreNames = Array.from(objectStoreNamesSet);
            const transaction = db.transaction(objectStoreNames, "readonly");
            transaction.onerror = event => cb(event, null);

            objectStoreNames.forEach(storeName => {
                const allObjects = [];
                transaction.objectStore(storeName).openCursor().onsuccess = event => {
                    const cursor = event.target.result;
                    const item = {};
                    if (cursor) {
                        item[cursor.key] = cursor.value;
                        allObjects.push(item);
                        cursor.continue();
                    } else {
                        exportObject[storeName] = allObjects;
                        if (objectStoreNames.length === Object.keys(exportObject).length) {
                            cb(null, exportObject);
                        }
                    }
                };
            });
        }
    };
}

/**
 * Import data from JSON into an IndexedDB database. This does not delete any existing data
 *  from the database, so keys could clash.
 *
 * Only object stores that already exist will be imported.
 *
 * @param {IDBDatabase} idbDatabase - to import into
 * @param {string} jsonString - data to import, one key per object store
 * @param {function(Object)} cb - callback with signature (error), where error is null on success
 * @return {void}
 */
function importFromJson(idbDatabase, jsonString, cb) {
    const objectStoreNamesSet = new Set(idbDatabase.objectStoreNames);
    const size = objectStoreNamesSet.size;
    if (size === 0) {
        cb(null);
    } else {
        const objectStoreNames = Array.from(objectStoreNamesSet);
        const transaction = idbDatabase.transaction(objectStoreNames, "readwrite");
        transaction.onerror = event => cb(event);

        const importObject = JSON.parse(jsonString);

        // Delete keys present in JSON that are not present in database
        Object.keys(importObject).forEach(storeName => {
            if (!objectStoreNames.includes(storeName)) {
                delete importObject[storeName];
            }
        });

        if (Object.keys(importObject).length === 0) {
            // no object stores exist to import for
            cb(null);
        }

        objectStoreNames.forEach(storeName => {
            let count = 0;
            const aux = Array.from(importObject[storeName] || []);
            if (importObject[storeName] && aux.length > 0) {
                aux.forEach(toAdd => {
                    // console.log(Object.keys(toAdd)[0]);
                    const request = transaction
                        .objectStore(storeName)
                        .put(toAdd[Object.keys(toAdd)[0]], Object.keys(toAdd)[0]);
                    request.onsuccess = () => {
                        count++;
                        if (count === importObject[storeName].length) {
                            // added all objects for this store
                            delete importObject[storeName];
                            if (Object.keys(importObject).length === 0) {
                                // added all object stores
                                cb(null);
                            }
                        }
                    };
                    request.onerror = event => {
                        console.log(event);
                    };
                });
            } else {
                if (importObject[storeName]) {
                    delete importObject[storeName];
                    if (Object.keys(importObject).length === 0) {
                        // added all object stores
                        cb(null);
                    }
                }
            }
        });
    }
}

/**
 * Clears a database of all data.
 *
 * The object stores will still exist but will be empty.
 *
 * @param {IDBDatabase} idbDatabase - to delete all data from
 * @param {function(Object)} cb - callback with signature (error), where error is null on success
 * @return {void}
 */
function clearDatabase(idbDatabase, cb) {
    const objectStoreNamesSet = new Set(idbDatabase.objectStoreNames);
    const size = objectStoreNamesSet.size;
    if (size === 0) {
        cb(null);
    } else {
        const objectStoreNames = Array.from(objectStoreNamesSet);
        const transaction = idbDatabase.transaction(objectStoreNames, "readwrite");
        transaction.onerror = event => cb(event);

        let count = 0;
        objectStoreNames.forEach(function (storeName) {
            transaction.objectStore(storeName).clear().onsuccess = () => {
                count++;
                if (count === size) {
                    // cleared all object stores
                    cb(null);
                }
            };
        });
    }
}

function getHihiiroShowData(rawData) {
    rawData.sort(function (a, b) {
        return Object.keys(a)[0] - Object.keys(b)[0];
    });
    const raidNameList = ["cb", "tuyobaha", "akx", "gurande"];
    const showData = [{}, {}, {}, {}];
    // 初始化
    for (let i = 0; i < raidNameList.length; i++) {
        showData[i].count = 0;
        showData[i].blueChestCount = 0;
        showData[i].redChestFFJ = 0;
        showData[i].blueChestFFJ = 0;
        showData[i].normalChestFFJ = 0;
        showData[i].totalFFJ = 0;
        showData[i].whiteRing = 0;
        showData[i].blackRing = 0;
        showData[i].redRing = 0;
        showData[i].lastCount = 0;
        showData[i].lastBlueChestCount = 0;
    }
    for (let i = 0; i < rawData.length; i++) {
        try {
            const item = rawData[i];
            const key = Object.keys(item)[0];
            const value = item[key];

            const dataNo = raidNameList.indexOf(value.raidName);
            showData[dataNo].count++;
            value.blueChests && showData[dataNo].blueChestCount++;
            value.goldBrick == 4 && showData[dataNo].redChestFFJ++;
            value.goldBrick == 11 && showData[dataNo].blueChestFFJ++;
            value.goldBrick == 3 && showData[dataNo].normalChestFFJ++;
            showData[dataNo].totalFFJ =
                showData[dataNo].redChestFFJ + showData[dataNo].blueChestFFJ + showData[dataNo].normalChestFFJ;
            value.blueChests == "73_1" && showData[dataNo].whiteRing++;
            value.blueChests == "73_2" && showData[dataNo].blackRing++;
            value.blueChests == "73_3" && showData[dataNo].redRing++;
            showData[dataNo].lastCount = value.goldBrick ? 0 : showData[dataNo].lastCount + 1;
            showData[dataNo].lastBlueChestCount =
                value.blueChests == "17_20004"
                    ? 0
                    : value.blueChests
                    ? showData[dataNo].lastBlueChestCount + 1
                    : showData[dataNo].lastBlueChestCount;
        } catch (error) {
            console.log("数据异常");
        }
    }
    return showData;
}
function exportJSONFile(itemList) {
    if (itemList.length == 0) {
        alert("没有数据");
    } else {
        const data = JSON.stringify(itemList);
        let content = new Blob([data]);
        let urlObject = window.URL || window.webkitURL || window;
        let url = urlObject.createObjectURL(content);
        let el = document.createElement("a");
        el.href = url;
        el.download = "gbfApp_金本统计数据.json";
        el.click();
        urlObject.revokeObjectURL(url);
    }
}
function importJSONFile(target) {
    let selectedFile = null;
    selectedFile = target.files[0];
    if (selectedFile === undefined) {
        return;
    }
    if (selectedFile.type !== "application/json") {
        alert("文件格式不对");
        target.value = "";
        return;
    }
    var reader = new FileReader();

    reader.readAsText(selectedFile);
    reader.onload = function () {
        let data = JSON.parse(this.result);
        const DBOpenRequest = window.indexedDB.open("gbfApp");
        let db;

        DBOpenRequest.onupgradeneeded = function (event) {
            db = event.target.result;
            if (!db.objectStoreNames.contains("GoldBrick")) {
                db.createObjectStore("GoldBrick");
            }
        };
        DBOpenRequest.onsuccess = async function (event) {
            db = DBOpenRequest.result;

            const jsonstr = {
                GoldBrick: [],
            };

            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                const key = Object.keys(element)[0];
                jsonstr.GoldBrick.push({ [key]: element[key] });
            }

            importFromJson(db, JSON.stringify(jsonstr), function (err) {
                if (!err) {
                    alert("导入成功");
                    location.reload();
                }
            });
        };
    };
}
function getHihiiroDetailCountData({ range, rawData }) {
    rawData.sort(function (a, b) {
        return Object.keys(a)[0] - Object.keys(b)[0];
    });
    const raidNameList = ["tuyobaha", "akx", "gurande"];

    const showData = [{}, {}, {}];
    // 初始化
    for (let i = 0; i < raidNameList.length; i++) {
        showData[i].labels = [0];
        showData[i].count = [0];
        if (range == "month") {
            let date = dayjs().subtract(30, "day");
            for (let j = 0; j < 30; j++) {
                showData[i].labels.push(`${date.month() + 1}-${date.date()}`);
                showData[i].count.push(0);
                date = dayjs(date).add(1, "day");
            }
        } else if (range == "halfYear") {
            let date = dayjs().subtract(6, "month");
            for (let j = 0; j < 6; j++) {
                showData[i].labels.push(`${date.month() + 1}`);
                showData[i].count.push(0);
                date = dayjs(date).add(1, "month");
            }
        } else if (range == "year") {
            let date = dayjs().subtract(1, "year");
            for (let j = 0; j < 12; j++) {
                showData[i].labels.push(`${date.month() + 1}`);
                showData[i].count.push(0);
                date = dayjs(date).add(1, "month");
            }
        }
    }
    for (let i = 0; i < rawData.length; i++) {
        const item = rawData[i];
        const key = Object.keys(item)[0];
        const value = item[key];
        const dataNo = raidNameList.indexOf(value.raidName);
        if (dataNo != -1) {
            if (range == "month") {
                let date = dayjs().subtract(30, "day");
                for (let j = 0; j < 30; j++) {
                    if (date.isSame(dayjs(value.timestamp), "date")) {
                        showData[dataNo].count[j]++;
                    }
                    date = date.add(1, "day");
                }
            } else if (range == "halfYear") {
                let date = dayjs().subtract(6, "month");
                for (let j = 0; j < 6; j++) {
                    if (date.isSame(dayjs(value.timestamp), "month")) {
                        showData[dataNo].count[j]++;
                    }
                    date = dayjs(date).add(1, "month");
                }
            } else if (range == "year") {
                let date = dayjs().subtract(1, "year");
                for (let j = 0; j < 12; j++) {
                    if (date.isSame(dayjs(value.timestamp), "month")) {
                        showData[dataNo].count[j]++;
                    }
                    date = dayjs(date).add(1, "month");
                }
            }
        }
    }
    return showData;
}

function getHihiiroDetailBlueChestData({ rawData }) {
    rawData.sort(function (a, b) {
        return Object.keys(a)[0] - Object.keys(b)[0];
    });
    const raidNameList = ["tuyobaha", "akx", "gurande"];

    const showData = [{}, {}, {}];
    // 初始化
    for (let i = 0; i < raidNameList.length; i++) {
        showData[i].labels = [1];
        showData[i].count = [0];
    }
    for (let i = 0; i < rawData.length; i++) {
        const item = rawData[i];
        const key = Object.keys(item)[0];
        const value = item[key];
        const dataNo = raidNameList.indexOf(value.raidName);
        if (dataNo != -1) {
            if (value.goldBrick == 11) {
                showData[dataNo].labels.push(showData[dataNo].labels[showData[dataNo].labels.length - 1] + 1);
                showData[dataNo].count.push(0);
            } else {
                value.blueChests && showData[dataNo].count[showData[dataNo].count.length - 1]++;
            }
        }
    }
    return showData;
}
export {
    getEvokerPageResult,
    getEvokerPagePercent,
    getRatio,
    getFlag,
    getCritCalcResult,
    getBestThreeWeaponCrit,
    exportToJson,
    importFromJson,
    clearDatabase,
    getHihiiroShowData,
    exportJSONFile,
    importJSONFile,
    getHihiiroDetailCountData,
    getHihiiroDetailBlueChestData,
};
