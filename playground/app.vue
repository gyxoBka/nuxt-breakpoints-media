<template>
  <div>
    isSmallThanMd: {{ isSmallThanMd }}
  </div>
</template>

<script setup>
const bp = useBreakpoints()
const isSmallThanMd = computed(() => bp.value.sMd)
</script>
