export interface Article {
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

export interface Bullet {
  seq_id: string
  name: string
  comment: string
  article: Article[]
  number?: number
  done?: boolean
  total?: Article[]
}
