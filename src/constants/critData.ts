// 计算暴击用数据
export const critData: CritData[] = [
  { skillName: '技巧(小)', level: 10, rate: 2 },
  { skillName: '技巧(小)', level: 15, rate: 3 },
  { skillName: '技巧(小)', level: 20, rate: 4 },
  { skillName: '技巧(中)', level: 10, rate: 5 },
  { skillName: '技巧(中)', level: 15, rate: 6.5 },
  { skillName: '技巧(中)', level: 20, rate: 7.5 },
  { skillName: '技巧(大)', level: 10, rate: 8 },
  { skillName: '技巧(大)', level: 15, rate: 10 },
  { skillName: '技巧(大)', level: 20, rate: 11 },
  { skillName: '技巧(大II)', level: 10, rate: 9 },
  { skillName: '技巧(大II)', level: 15, rate: 12 },
  { skillName: '石油弓', level: 20, rate: 11.5 },
  { skillName: '水龙枪', level: 15, rate: 20, noEffect: true },
  { skillName: '转世武', level: 10, rate: 20, noEffect: true },
  { skillName: '转世武', level: 15, rate: 30, noEffect: true },
]

// 六龙0凸：10% 满突：40%  天司被动：20%  辉夜一把30 上限90
export const boostList: BoostItem[] = [
  {
    label: '零面',
    list: [
      { value: 0, tip: '10' },
      { value: 10, tip: '10' },
      { value: 20, tip: '20' },
      { value: 30, tip: '10+20' },
      { value: 40, tip: '40' },
      { value: 60, tip: '20+40)' },
    ],
  },
  {
    label: '单面',
    list: [
      { value: 140, tip: '140' },
      { value: 150, tip: '150' },
      { value: 160, tip: '150+10' },
      { value: 170, tip: '150+20' },
      { value: 180, tip: '150+10+20' },
      { value: 190, tip: '150+40' },
      { value: 210, tip: '150+20+40' },
    ],
  },
  {
    label: '双面',
    list: [
      { value: 280, tip: '280' },
      { value: 300, tip: '300' },
      { value: 310, tip: '300+10' },
      { value: 320, tip: '300+20' },
      { value: 330, tip: '300+10+20' },
      { value: 340, tip: '300+40' },
      { value: 360, tip: '300+20+40' },
    ],
  },
]

export interface CritData {
  skillName: string
  level: number
  rate: number
  noEffect?: boolean
}

export interface BoostItem {
  label: string
  list: { value: number, tip: string }[]
}
