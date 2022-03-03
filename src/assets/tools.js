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

const getCritCalcResult = function (boostLevel) {
    console.log(boostLevel);
    console.log(critData);

    const start = critData;
    console.log(start);

    let result = [];
    for (let i = 0; i < start.length; i++) {
        const element = start[i];
        if (element.boosted != false) {
            console.log(element);
            element.rate = ((boostLevel[0] + 100) / 100) * element.rate;
        }
        result.push(element);
    }
    return result;
};

export { getEvokerPageResult, getEvokerPagePercent, getRatio, getFlag, getCritCalcResult };
