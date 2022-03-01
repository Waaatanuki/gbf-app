import { evokerData } from "./uncapData";

const getEvokerPageResult = function (e, v) {
    let result = {};

    for (let i = 0; i < 10; i++) {
        if (e[i].target) {
            let currentNo = e[i].no;
            let currentTarotLevel = e[i].tarotLevel || 0;
            let currentEvokerLevel = e[i].evokerLevel || 0;
            let currentWeaponLevel = e[i].weaponLevel || 0;
            let currentDomainLevel = e[i].domainLevel || 0;

            // 塔罗突破素材
            for (let j = currentTarotLevel; j < evokerData[currentNo].tarotUncap.length; j++) {
                let tarotUncapData = evokerData[currentNo].tarotUncap[j];
                for (const k in tarotUncapData) {
                    if (isNaN(result[k])) {
                        result[k] = 0;
                    }
                    result[k] += tarotUncapData[k];
                }
            }

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

            // 贤者突破素材
            for (let j = currentEvokerLevel; j < evokerData[currentNo].evokerUncap.length; j++) {
                let evokerUncapData = evokerData[currentNo].evokerUncap[j];
                for (const k in evokerUncapData) {
                    if (isNaN(result[k])) {
                        result[k] = 0;
                    }
                    result[k] += evokerUncapData[k];
                }
            }

            // 贤武突破素材
            for (let j = currentWeaponLevel; j < evokerData[currentNo].weaponUncap.length; j++) {
                let weaponUncapData = evokerData[currentNo].weaponUncap[j];
                for (const k in weaponUncapData) {
                    if (isNaN(result[k])) {
                        result[k] = 0;
                    }
                    result[k] += weaponUncapData[k];
                }
            }

            // 领域突破素材
            for (let j = currentDomainLevel; j < evokerData[currentNo].domainUncap.length; j++) {
                let domainUncapData = evokerData[currentNo].domainUncap[j];
                for (const k in domainUncapData) {
                    if (isNaN(result[k])) {
                        result[k] = 0;
                    }
                    result[k] += domainUncapData[k];
                }
            }
        }
    }

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

export { getEvokerPageResult };
