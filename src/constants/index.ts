import type { AppGoldBrickTableData } from 'goldBrick'
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
    monthlyTableData: [],
    lastFFJTime: 0,
    lastFFJTakeDay: 0,
  })
  return pre
}, [])
