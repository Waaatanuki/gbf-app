<script lang="ts" setup>
defineProps({
  collapse: {
    type: Boolean,
    required: true,
  },
})
const sidebarLogo = ref(true)
const logo = ref<string>(new URL(`/images/logo.png`, import.meta.url).href)
const title = ref('古兰布鲁')
</script>

<template>
  <transition>
    <router-link
      v-if="collapse"
      key="collapse"
      class="h-[50px] flex items-center justify-center"
      to="/"
    >
      <img v-if="sidebarLogo" :src="logo" class="w-8 h-8" />
      <h1 v-else>{{ title }}</h1>
    </router-link>

    <router-link
      v-else
      key="expand"
      class="h-[50px] flex items-center justify-center"
      to="/"
    >
      <img v-if="sidebarLogo" :src="logo" class="w-8 h-8" />
      <span class="ml-3 text-black text-sm font-bold">{{ title }}</span>
    </router-link>
  </transition>
</template>

<!-- <template>
  <div class="sidebar-logo-container" :class="{ collapse: isCollapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="collapse"
        key="collapse"
        class="sidebar-logo-link"
        to="/"
      >
        <img v-if="logo" :src="logo" class="sidebar-logo" />
        <h1 v-else class="sidebar-title">{{ title }}</h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo" />
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template> -->

<!-- <script setup lang="ts">
import { ref, reactive, toRefs } from 'vue'

const props = defineProps({
  collapse: {
    type: Boolean,
    required: true,
  },
})

const state = reactive({
  isCollapse: props.collapse,
  logo: new URL(`/images/logo.png`, import.meta.url).href,
  fullLogo: new URL(`../../../assets/full_logo.png`, import.meta.url).href,
})

const { isCollapse, logo, fullLogo } = toRefs(state)

const title = ref('古兰布鲁')
</script>

<style lang="scss" scoped>
</style> -->
