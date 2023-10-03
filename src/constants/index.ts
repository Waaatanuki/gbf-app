import type { AppGoldBrickTableData } from 'goldBrick'
import { Raid_GoldBrick } from './raid'

export const schedule = [
  {
    title: '月末战货',
    comment: '',
    start: '2023-09-28 19:00',
    end: '2023-10-06 20:59',
  },
  {
    title: '转世外传',
    comment: '',
    start: '2023-10-07 17:00',
    end: '2023-10-13 16:59',
  },
  {
    title: '公会战',
    comment: '',
    start: '2023-10-14 19:00',
    end: '2023-10-20 18:59',
  },
  {
    title: '剧情复刻',
    comment: '',
    start: '2023-10-21 17:00',
    end: '2023-10-28 18:59',
  },
  {
    title: '巴布塔',
    comment: '',
    start: '2023-10-24 19:00',
    end: '2023-10-31 18:59',
  },
  {
    title: '月末战货',
    comment: '',
    start: '2023-10-29 17:00',
    end: '2023-11-06 20:59',
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
