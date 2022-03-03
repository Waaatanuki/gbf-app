// 计算素材比例用的初始状态
const newEvokerInfo = [
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

// 计算暴击用数据
const critData = [
    { skillName: "技巧(小)", level: 15, rate: 3 },
    { skillName: "技巧(小)", level: 20, rate: 4 },
    { skillName: "技巧(中)", level: 15, rate: 6.5 },
    { skillName: "技巧(中)", level: 20, rate: 7.5 },
    { skillName: "技巧(大)", level: 15, rate: 10 },
    { skillName: "技巧(大)", level: 20, rate: 11 },
    { skillName: "技巧II", level: 15, rate: 12 },
    { skillName: "水龙枪", level: 15, rate: 20, waterOnly: true, boosted: false },
    { skillName: "10技转世武器", level: 10, rate: 20, sandboxOnly: true, boosted: false },
    { skillName: "15技转世武器", level: 15, rate: 30, sandboxOnly: true, boosted: false },
    { skillName: "石油弓", level: 20, rate: 11.5, kamiOnly: true, onlyOne: true },
];
export { newEvokerInfo, critData };
