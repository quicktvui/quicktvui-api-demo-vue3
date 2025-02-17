<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-image-assets-page">
      <qt-image :src="logoImg"
                class="qt-image"/>
    </qt-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

import logoImg from '../../assets/logo.png'

export default defineComponent({
  name: '本地图片',
  setup() {
    return {
      logoImg,
    }
  },
});
</script>

<style>
.qt-image-assets-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.qt-image-assets-page .qt-image {
  width: 256px;
  height: 256px;
}
</style>
