<script setup lang="ts">
const props = defineProps<{ name: string }>()
const user = useUserStore()
watchEffect(() => {
  user.setNewName(props.name)
})
</script>

<template>
  <div>
    {{ name }}
  </div>
</template>
