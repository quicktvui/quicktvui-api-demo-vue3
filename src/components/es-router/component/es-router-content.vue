<template>
  <div class="es-sdk-content-row-css">
    <div class="es-sdk-router-content-column-css">
      <s-text-view text="路由堆栈"/>
      <s-text-view v-for="(item, index) in stack"
                   :text="item.location + '----> : ' + item.lifecycle"
                   style="width: 1000px; text-align: left"/>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  stack: {
    type: Array,
    default: () => [],
  },
})

</script>

<style scoped>
.es-sdk-router-content-column-css {
  height: 710px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
}

</style>
