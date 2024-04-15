<script setup lang="ts">
const props = defineProps<{
  value: number
}>()

const numberItemRef = ref(0)

const emits = defineEmits<{
  (e: 'theanh', value: number): void
}>()
</script>

<template>
  <a-button @click="emits('theanh', 20)">{{ value }}</a-button>
</template>
