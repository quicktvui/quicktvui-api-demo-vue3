<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-column class="qt-sdk-content-column-css">
      <s-text-view text="Item"></s-text-view>
      <s-text-view text="Item"></s-text-view>
      <s-text-view text="Item"></s-text-view>
      <s-text-view text="Item"></s-text-view>
    </qt-column>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: '使用初探',
});
</script>

<style>
.qt-sdk-content-column-css {
  width: 1920px;
  height: 800px;
  background-color: palevioletred;
  align-items: center;
  justify-content: center;
}
</style>
