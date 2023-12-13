<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <qt-text class="es-sdk-content-title-css"> qr-view </qt-text>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qr-view-start-page">
      <qr-view style="width:200px; height:200px;background-color: aqua;" content="http://www.xxxx.com/" :optimize="true"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'qr-view 使用初探',
  setup(props, context) {
    return {
    }
  },
});
</script>

<style>
.qr-view-start-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
