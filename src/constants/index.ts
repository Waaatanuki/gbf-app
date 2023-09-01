import { Raid_GoldBrick } from './raid'

export const schedule = [
  {
    title: '月末战货',
    comment: '',
    start: '2023-08-29 19:00',
    end: '2023-09-06 20:59',
  },
  {
    title: '神灭战',
    comment: '',
    start: '2023-09-07 19:00',
    end: '2023-09-13 18:59',
  },
  {
    title: '剧情复刻',
    comment: '',
    start: '2023-09-12 19:00',
    end: '2023-09-19 18:59',
  },
  {
    title: '古战场',
    comment: '',
    start: '2023-09-20 19:00',
    end: '2023-09-27 23:59',
  },
  {
    title: '月末战货',
    comment: '',
    start: '2023-09-28 19:00',
    end: '2023-10-06 20:59',
  },
]

export const defaultTodoList = [
  { done: false, content: '巡岛' },
  { done: false, content: '大巴' },
  { done: false, content: '超巴' },
  { done: false, content: '活动日常' },
  { done: false, content: '沙盒' },
  { done: false, content: '抽卢比' },
]

export const defaultAppGoldBrickTableData = Raid_GoldBrick.reduce<AppGoldBrickTableData[]>((pre, cur) => {
  pre.push({
    ...cur,
    total: 0,
    blueChest: 0,
    redChestFFJ: 0,
    blueChestFFJ: 0,
    normalChestFFJ: 0,
    ring1: 0,
    ring2: 0,
    ring3: 0,
    lastBlueChestCount: 0,
    monthlyTableData: [],
    lastFFJTime: 0,
  })
  return pre
}, [])

export interface AppGoldBrickTableData {
  quest_id: string
  raidName: string
  level: string
  element: string
  tweet_name_en: string
  tweet_name_jp: string
  quest_name_en: string
  quest_name_jp: string
  impossible: number
  difficulty: string
  stage_id: string
  thumbnail_image: string
  is_blue_treasure: boolean
  total: number
  blueChest: number
  redChestFFJ: number
  blueChestFFJ: number
  normalChestFFJ: number
  ring1: number
  ring2: number
  ring3: number
  lastBlueChestCount: number
  lastFFJTime: number
  monthlyTableData: MonthlyTableData[]
}

export interface MonthlyTableData {
  date: string
  total: number
  blueChest: number
  blueChestFFJ: number
  ring3: number
}

export interface Record {
  [key: string]: {
    raidName: string
    timestamp: number
    goldBrick?: string
    blueChests?: string
  }
}
