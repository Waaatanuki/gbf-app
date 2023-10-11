import GameIconsPhilosopherBust from '~icons/game-icons/philosopher-bust'
import GameIconsGoldStack from '~icons/game-icons/gold-stack'
import GameIconsMimicChest from '~icons/game-icons/mimic-chest'
import GameIconsHeavyBullets from '~icons/game-icons/heavy-bullets'
import GameIconsChest from '~icons/game-icons/chest'

export const menuList = [
  {
    label: '贤者素材',
    icon: GameIconsPhilosopherBust,
    url: '/evoker',
  },
  {
    label: '猎金统计',
    icon: GameIconsGoldStack,
    url: '/goldBrick',
  },
  {
    label: '抽卡模拟',
    icon: GameIconsMimicChest,
    url: '/gacha',
  },
  {
    label: '子弹制作',
    icon: GameIconsHeavyBullets,
    url: '/bullet',
  },
  {
    label: '战货计算',
    icon: GameIconsChest,
    url: '/drawbox',
  },
]
