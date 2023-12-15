<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <qt-text class="es-sdk-content-title-css"> qt-loading-view </qt-text>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-loading-view-start-page">
      <qt-loading-view color="#409eff" style="height: 150px;width: 150px;"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'qt-loading-view 使用初探',
  setup(props, context) {
    return {
    }
  },
});
</script>

<style>
.qt-loading-view-start-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
