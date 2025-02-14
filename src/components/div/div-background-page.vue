<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-row class="qt-sdk-content-row-css">
      <div class="qt-view-background-css" />
    </qt-row>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: '背景色',
})
</script>

<style>
.qt-view-background-css {
  width: 192px;
  height: 108px;
  background-color: darkgoldenrod;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
</style>
