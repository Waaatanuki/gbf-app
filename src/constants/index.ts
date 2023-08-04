import { Raid_EternitySand, Raid_GoldBrick } from './raid'

export const defaultTodoList = [
  { done: false, content: '巡岛' },
  { done: false, content: '大巴' },
  { done: false, content: '超巴' },
  { done: false, content: '活动日常' },
  { done: false, content: '沙盒' },
  { done: false, content: '抽卢比' },
]

export const noticeItem = [
  { key: '10_215', comment: '沙漏' },
  { key: '17_20004', comment: 'ffj' },
]

export const defaultEternitySandData = Raid_EternitySand.reduce((pre, cur) => {
  const data: RaidInfo = { ...cur }
  data.visiable = true
  data.total = 0
  data.blueChest = 0
  data.eternitySand = 0
  data.lastDropCount = 0
  pre.push(data)
  return pre
}, [] as RaidInfo[])

export const defaultGoldBrickTableData = Raid_GoldBrick.reduce((pre, cur) => {
  const data: GoldBrickTableData = {
    quest_id: cur.quest_id,
    total: 0,
    blueChest: 0,
    goldBrick: 0,
    ring1: 0,
    ring2: 0,
    ring3: 0,
    lastBlueChestCount: 0,
  }
  pre.push(data)
  return pre
}, [] as GoldBrickTableData[])

export interface GoldBrickTableData {
  quest_id: string
  total: number
  blueChest: number
  goldBrick: number
  ring1: number
  ring2: number
  ring3: number
  lastBlueChestCount: number
}

export interface RaidInfo {
  quest_id: string
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
  visiable?: boolean
  is_blue_eternitySand?: boolean
  total?: number
  blueChest?: number
  eternitySand?: number
  lastDropCount?: number
}
