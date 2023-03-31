<template>
  <div>
    <div w-250px flex justify-start v-for="row in itemList">
      <div
        w-50px
        flex
        flex-col
        justify-center
        items-center
        p-5px
        v-for="item in row"
        v-show="item"
      >
        <img
          :src="`https://prd-game-a-granbluefantasy.akamaized.net/assets/img/sp/assets/item/article/s/${item}.jpg`"
        />
        <input
          w-40px
          text-12px
          text-right
          pr-2px
          v-model.number="materialInfo[item]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['materialInfo'])

const itemList = [
  ['25000', '25001', '25002', '25003', '25004'],
  ['25005', '25006', '25007', '25008', '25009'],
  ['25010', '25011', '25012', '25013', '25014'],
  ['25015', '25016', '25017', '25020', '25021'],
  ['25033', '25034', '25035', '25036', '25023'],
  ['25024', '25025', '25026', '25047', '25048'],
  ['25049', '25050', '25051', '25052', '25053'],
  ['25054', '25055', '25056', '25070', '25071'],
  ['25072', '25073', '25074', '25085', '25086'],
  ['25087', '25088'],
]
</script>
