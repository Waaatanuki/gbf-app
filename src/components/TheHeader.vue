<script setup lang="ts">
import { menuList } from '~/constants/menu'

const router = useRouter()

const currentPage = computed(() => menuList.find(menu => menu.url === router.currentRoute.value.path),
)
</script>

<template>
  <nav flex="~ gap-4" mx-5 mb-10 justify-between text-xl>
    <div fc gap-10px>
      <div v-if="currentPage" i-carbon:home icon-btn @click="$router.push('/')" />
      {{ currentPage?.label }}
    </div>
    <div fc gap-10px>
      <button m-8px icon-btn @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>
      <a
        i-carbon:debug m-2 hover:text-teal-600
        rel="noreferrer"
        href="https://bbs.nga.cn/read.php?tid=30999435"
        target="_blank"
        title="报Bug"
      />
      <a

        i-carbon:logo-github m-2 hover:text-teal-600
        rel="noreferrer"
        href="https://github.com/Waaatanuki/gbf-app"
        target="_blank"
        title="GitHub"
      />
    </div>
  </nav>
</template>
