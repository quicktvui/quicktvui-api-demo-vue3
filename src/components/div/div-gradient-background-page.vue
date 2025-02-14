<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-row class="qt-sdk-content-row-css">
      <div
        class="qt-view-gradient-background-css"
        :gradientBackground="{
          type: 0,
          shape: 0,
          colors: ['#ff0000', '#00ff00'],
          cornerRadii4: [0, 5, 20, 0],
        }"
      />
    </qt-row>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: '渐变背景色',
})
</script>

<style>
.qt-view-gradient-background-css {
  width: 192px;
  height: 108px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
</style>
