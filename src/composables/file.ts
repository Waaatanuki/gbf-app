export function getLocalImg(prop: string, type = 'common') {
  return new URL(`/src/assets/image/${type}/${prop}.png`, import.meta.url).href
}

export function getQuestImg(quest_id: string) {
  return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/quest/assets/lobby/${quest_id}.png`
}

export function getNpcImg(npcId: number) {
  return `https://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/npc/m/${npcId}_01.jpg`
}

export function getGachaItemImg(cat: string, id: string) {
  return `http://prd-game-a1-granbluefantasy.akamaized.net/assets/img/sp/assets/${cat}/m/${id}.jpg`
}

export function getBulletImg(id: string) {
  return `https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/bullet/s/${id}.jpg`
}
