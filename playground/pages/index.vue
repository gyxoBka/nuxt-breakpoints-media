<template>
  <div :class="{ 'test-small': isSmallThanMd }">
    isSmallThanMd: {{ isSmallThanMd }}
  </div>
</template>

<script setup lang="ts">
const bp = useBreakpoints()
const isSmallThanMd = computed(() => bp.value.sMd)
</script>
