declare module 'goldBrick' {
  interface AppGoldBrickTableData {
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
    lastBlueChestTake?: number
    lastFFJTime: number
    lastFFJTakeDay: number
    monthlyTableData: MonthlyTableData[]
  }

  interface MonthlyTableData {
    date: string
    total: number
    blueChest: number
    blueChestFFJ: number
    ring3: number
  }

  interface Record {
    [key: string]: {
      raidName: string
      timestamp: number
      goldBrick?: string
      blueChests?: string
    }
  }

  interface ChartData {
    labels: string[]
    count: number[]
  }
}

declare module 'bullet'{
  interface Article {
    id?: string
    image?: string
    seq_id?: string
    name?: string
    comment?: string
    rarity?: string
    category_type?: string
    number: number
    kind?: string
    item_id?: string
    slot_type?: string
    attack_rate?: string
    action_id_1?: string
    action_id_2?: string
    concurrent_attack?: string
    recovery?: string
    recovery_percent?: string
    item_kind?: string
    evolution_kind?: string
    base_weapon_id?: string
    exchange_weapon_id?: string
    add_skill_id?: string
    target_ids?: string
    target_evolution_levels?: string
    done?: boolean
  }

  interface Bullet {
    seq_id: string
    name: string
    comment: string
    article: Article[]
    number?: number
    done?: boolean
    total?: Article[]
  }
}

declare module 'evoker'{
  // 旧storage数据没有npcId
  interface EvokerInfo {
    npcId?: number
    no: number
    name: string
    target: boolean
    tarotLevel: number
    evokerLevel: number
    weaponId: number
    weaponLevel: number
    domainLevel: number
    isAbility4Release: boolean
  }
}
