declare module 'api' {
  export interface LineParams {
    teamraidid: string
    type: string
    rank: string
  }

  export interface GuildParams {
    guildid: string
    guildname: string
    teamraidid: string
  }

  export interface GuildInfo {
    guildid: number
    name: string
    point: string
    rank: string | number
  }

  export interface UserParams {
    userid: string
    username: string
  }

  export interface UserInfo {
    userid: number
    name: string
    level: number
  }

  export interface PointParams {
    teamraidid: string
    type: string
    id: string
  }

  export interface PointInfo {
    point: number
    rank: number
    updatetime: number
  }
}

declare module 'common' {
  export enum EventStage {
    Pre = 'pre',
    Final1st = 'final1st',
    Final2nd = 'final2nd',
    Final3rd = 'final3rd',
    Final4th = 'final4th',
  }

  export enum Locale {
    ZH_CN = 'zh-CN',
    EN = 'en',
    JA = 'ja',
  }

  export interface ReportMemo {
    point: number
    rank: number
    updatetime: number
    type: string
  }

  export interface EventInfo {
    value: string
    label: string
    title: string
    date: {
      pre: number
      final1st: number
      final2nd: number
      final3rd: number
      final4th: number
    }
    loading?: boolean
    tableData?: any[]
    chartData?: any
    rank?: number
  }

  export interface DateSet {
    label: string
    pointData: (number | undefined)[]
    borderColor: string
    spanGaps: boolean
    tension: number
  }

  export interface ReportData {
    label: {
      'zh-CN': string
      en: string
      ja: string
    }
    options: {
      value: string
      label: string
      point: number
      proportion: { value: number; type: '' | 'success' | 'danger' }
    }[]
  }
  export interface LineRankTableData {
    label: string
    userPoint: number | null
    linePoint: number | null
    userSpeed: number | null
    lineSpeed: number | null
  }

  export interface GuildBattleTableData {
    label: string
    guildPoint1: number | null
    guildPoint2: number | null
    guildSpeed1: number | null
    guildSpeed2: number | null
  }
}
