import type { AppGoldBrickTableData } from 'goldBrick'
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
