<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <qt-text class="es-sdk-content-title-css"> 使用初探 </qt-text>
    <div class="es-sdk-content-divider-css"/>
    <qt-view class="qt-text-start-page">
      <qt-text class="qt-text" :opacity="0.5">
        文本标签
      </qt-text>
    </qt-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: '使用初探',
  setup(props, context) {
    return {
    }
  },
});
</script>

<style>
.qt-text-start-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.qt-text-start-page .qt-text{
  font-size: 88px;
  color: aqua;
}
</style>
