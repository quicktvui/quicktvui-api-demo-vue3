<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <p class="p-demo-content">这是最普通的一行文字</p>
      <p class="p-demo-1 p-demo-content">这行文字改变了颜色</p>
      <p class="p-demo-2 p-demo-content">这行改变了大小</p>
      <p class="p-demo-3 p-demo-content">这行加粗了</p>
      <p class="p-demo-4 p-demo-content">这里有条下划线</p>
      <p class="p-demo-5 p-demo-content">这里有条删除线</p>
    </div>
  </div>
</template>


<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'p',
  setup() {
    return {}
  },
});

</script>

<style>
.p-demo-content {
  margin: 20px;
  font-size: 40px;
}

.p-demo-1 {
  color: #f44837;
  font-size: 40px;
}

.p-demo-2 {
  font-size: 60px;
}

.p-demo-3 {
  font-weight: bold;
  font-size: 40px;
}

.p-demo-4 {
  text-decoration-line: underline;
  text-decoration: underline;
  font-size: 40px;
}

.p-demo-5 {
  text-decoration: line-through;
  font-size: 40px;
}
</style>
