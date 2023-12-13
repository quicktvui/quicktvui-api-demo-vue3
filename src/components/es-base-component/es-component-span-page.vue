<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <span>这是最普通的一行文字</span>
      <span class="es-sdk-span-class-1 es-sdk-span-content">这行文字改变了颜色</span>
      <span class="es-sdk-span-class-2 es-sdk-span-content">这行改变了大小</span>
      <span class="es-sdk-span-class-3 es-sdk-span-content">这行加粗了</span>
      <span class="es-sdk-span-class-4 es-sdk-span-content">这里有条下划线</span>
      <span class="es-sdk-span-class-5 es-sdk-span-content">这里有条删除线</span>
    </div>
  </div>
</template>


<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'span',
  setup() {
    return {}
  },
});

</script>

<style>
.es-sdk-span-content {
  margin: 20px;
  font-size: 40px;
}

.es-sdk-span-class-1 {
  color: #f44837;
  font-size: 40px;
}

.es-sdk-span-class-2 {
  font-size: 60px;
}

.es-sdk-span-class-3 {
  font-weight: bold;
  font-size: 40px;
}

.es-sdk-span-class-4 {
  text-decoration-line: underline;
  text-decoration: underline;
  font-size: 40px;
}

.es-sdk-span-class-5 {
  text-decoration: line-through;
  font-size: 40px;
}
</style>
