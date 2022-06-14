/**
 * Export all data from an IndexedDB database
 * @param {IDBDatabase} idbDatabase - to export from
 * @param {function(Object?, string?)} cb - callback with signature (error, jsonString)
 */

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
function clearDatabase(cb) {
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

        const objectStoreNamesSet = new Set(db.objectStoreNames);
        const size = objectStoreNamesSet.size;
        if (size === 0) {
            cb(null);
        } else {
            const objectStoreNames = Array.from(objectStoreNamesSet);
            const transaction = db.transaction(objectStoreNames, "readwrite");
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
    };
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
function exportJSONFile(itemList, filename) {
    const data = JSON.stringify(itemList);
    let content = new Blob([data]);
    let urlObject = window.URL || window.webkitURL || window;
    let url = urlObject.createObjectURL(content);
    let el = document.createElement("a");
    el.href = url;
    el.download = filename + ".json";
    el.click();
    urlObject.revokeObjectURL(url);
}
function importJSONFile(selectedFile) {
    if (selectedFile === undefined) {
        return "文件不存在";
    }
    if (selectedFile.type !== "application/json") {
        return "文件格式不对";
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
                    location.reload();
                }
            });
        };
    };
}

export { exportToJson, clearDatabase, getHihiiroShowData, exportJSONFile, importJSONFile };
