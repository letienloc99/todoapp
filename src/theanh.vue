<script setup lang="ts">
import Item from './Item.vue'

// ref, computed
const inputRef = ref('asdasd')
const numberRef = ref<number>(100) // useState
const open = ref(false)
const arr = [1, 2, 3, 4, 5, 6, 7]

const asd = computed(() => {
  return numberRef.value
})
const theanh = computed(() => {
  return asd.value
})

const handleClick = (value: number = 1) => {
  numberRef.value = numberRef.value + value
}
</script>

<template>
  <div>theanh {{ numberRef }}</div>
  <div>{{ inputRef }}</div>
  <a-input v-model:value="inputRef"></a-input>
  <a-button @click="handleClick(10)">click me!</a-button>
  <Item :value="numberRef" @theanh="handleClick" />
  <!-- <div v-for="(item, index) in arr" :key="item">
    <template v-if="item % 2 == 0">
      <div>{{ item % 2 == 0 ? 'chan' : 'le' }}</div>
      <div>theanh{{ index }}</div>
    </template>
  </div> -->
  <!--  -->
</template>

<style scoped lang="scss"></style>
