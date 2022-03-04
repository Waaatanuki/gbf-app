import { evokerData } from "./uncapData";
import { newEvokerInfo, critData } from "./data";

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

export { getEvokerPageResult, getEvokerPagePercent, getRatio, getFlag, getCritCalcResult, getBestThreeWeaponCrit };
