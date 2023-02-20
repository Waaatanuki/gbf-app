<template>
  <transition>
    <router-link v-if="collapse" key="collapse" to="/">
      <div class="h-[50px] flex items-center justify-center border-b-2">
        <img v-if="logo" :src="logo" class="w-8 h-8" />
        <h1 v-else>{{ title }}</h1>
      </div>
    </router-link>

    <router-link v-else key="expand" to="/">
      <div class="h-[50px] flex items-center justify-center border-b-2">
        <img v-if="logo" :src="logo" class="w-8 h-8" />
        <span class="ml-3 text-black text-sm font-bold">{{ title }}</span>
      </div>
    </router-link>
  </transition>
</template>

<script lang="ts" setup>
defineProps({
  collapse: {
    type: Boolean,
    required: true,
  },
})
const logo = ref<string>(new URL(`/images/logo.png`, import.meta.url).href)
const title = ref('古兰布鲁')
</script>
