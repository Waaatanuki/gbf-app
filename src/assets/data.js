import { getEvokerPageResult } from "./tools";

const evokerInfo = [
    { no: 7, name: "教皇", target: true },
    { no: 1, name: "芙劳", target: true },
    { no: 0, name: "女帝", target: true },
    { no: 8, name: "女教皇", target: true },
    { no: 4, name: "愚者", target: true },
    { no: 5, name: "魔术师", target: true },
    { no: 6, name: "皇帝", target: true },
    { no: 3, name: "节制", target: true },
    { no: 2, name: "战车", target: true },
    { no: 9, name: "尼亚", target: true },
];
const materialInfo = {};

const allMaterial = getEvokerPageResult(evokerInfo, materialInfo);

const ratio = {};
for (const k in allMaterial) {
    ratio[k] = allMaterial[k] / allMaterial[25074];
}

export { ratio, allMaterial };
