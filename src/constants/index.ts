import { Raid_GoldBrick } from './raid'

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
    rawDetailData: {},
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
  rawDetailData: {
    [key: string]: {
      raidName: string
      timestamp: number
      goldBrick?: string
      blueChests?: string
    }[]
  }
}

export interface Record {
  [key: string]: {
    raidName: string
    timestamp: number
    goldBrick?: string
    blueChests?: string
  }
}
