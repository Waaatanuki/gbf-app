<template>
  <div class="itemBox">
    <div class="item-row" v-for="(l, index) in itemSrc" :key="index">
      <div class="item-col" v-for="(i, index) in l" :key="index" v-show="i">
        <div class="item">
          <img style="height: 100%; width: 100%" :src="i" />
          <input class="itemNum" v-model.number.lazy="materialInfo[i]" onfocus="this.select()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(['materialInfo'])

const itemList = [
  [0, 0, 0, 25000, 25001],
  [25002, 25003, 25004, 25005, 25006],
  [25007, 25008, 25009, 25010, 25011],
  [25012, 25013, 25014, 25015, 25016],
  [25020, 25021, 25033, 25034, 25035],
  [25036, 25023, 25024, 25025, 25026],
  [25047, 25048, 25049, 25050, 25051],
  [25052, 25053, 25054, 25055, 25056],
  [25070, 25071, 25072, 25073, 25074],
]

const itemSrc = itemList.map(m =>
  m.map(n => (n ? new URL(`/src/assets/images/item/${n}.jpg`, import.meta.url).href : ''))
)
</script>

<style lang="less" scoped>
.itemBox {
  // background-color: #337ecc;
  padding-top: 5px;

  .item-row {
    display: flex;
    justify-content: flex-end;

    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding-right: 5px;
      padding-bottom: 5px;
      width: 50px;

      .itemNum {
        width: 40px;
      }
    }
  }
}
</style>
