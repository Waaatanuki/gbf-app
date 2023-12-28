export interface SummaryData {
  firstTimestamp: number
  total: number
  totalDayCount: number
  amCount: number
  pmCount: number
  nightCount: number
  dawnCount: number
  lastestData: {
    diffSecond: number
    lastestDate: string
    lastestTime: string
    raidName: string
  }
  mostData: {
    total: number
    goldBrick: number
    date: string
  }
}
