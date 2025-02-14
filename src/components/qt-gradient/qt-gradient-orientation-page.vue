<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-row class="qt-sdk-content-row-css">
      <qt-view class="qt-sdk-content-item-orientation-css"
               :gradientBackground="{type: 0, shape: 0, orientation: 0, colors: ['#ff0000', '#00ff00']}">
        <qt-text class="qt-sdk-content-item-text-css" gravity='center' text="TOP_BOTTOM"/>
      </qt-view>

      <qt-view class="qt-sdk-content-item-orientation-css"
               :gradientBackground="{type: 0, shape: 0, orientation: 1, colors: ['#ff0000', '#00ff00']}">
        <qt-text class="qt-sdk-content-item-text-css" gravity='center' text="TR_BL"/>
      </qt-view>

      <qt-view class="qt-sdk-content-item-orientation-css"
               :gradientBackground="{type: 0, shape: 0, orientation: 2, colors: ['#ff0000', '#00ff00']}">
        <qt-text class="qt-sdk-content-item-text-css" gravity='center' text="RIGHT_LEFT"/>
      </qt-view>

      <qt-view class="qt-sdk-content-item-orientation-css"
               :gradientBackground="{type: 0, shape: 0, orientation: 3, colors: ['#ff0000', '#00ff00']}">
        <qt-text class="qt-sdk-content-item-text-css" gravity='center' text="BR_TL"/>
      </qt-view>

      <qt-view class="qt-sdk-content-item-orientation-css"
               :gradientBackground="{type: 0, shape: 0, orientation: 4, colors: ['#ff0000', '#00ff00']}">
        <qt-text class="qt-sdk-content-item-text-css" gravity='center' text="BOTTOM_TOP"/>
      </qt-view>

      <qt-view class="qt-sdk-content-item-orientation-css"
               :gradientBackground="{type: 0, shape: 0, orientation: 5, colors: ['#ff0000', '#00ff00']}">
        <qt-text class="qt-sdk-content-item-text-css" gravity='center' text="BL_TR"/>
      </qt-view>

      <qt-view class="qt-sdk-content-item-orientation-css"
               :gradientBackground="{type: 0, shape: 0, orientation: 6, colors: ['#ff0000', '#00ff00']}">
        <qt-text class="qt-sdk-content-item-text-css" gravity='center' text="LEFT_RIGHT"/>
      </qt-view>

      <qt-view class="qt-sdk-content-item-orientation-css"
               :gradientBackground="{type: 0, shape: 0, orientation: 7, colors: ['#ff0000', '#00ff00']}">
        <qt-text class="qt-sdk-content-item-text-css" gravity='center' text="TL_BR"/>
      </qt-view>

    </qt-row>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'GradientType',
});
</script>

<style>
.qt-sdk-content-row-css {
  width: 1920px;
  height: 1080px;
  align-items: center;
  justify-content: center;
}

.qt-sdk-content-item-orientation-css {
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
  margin: 20px;
  background-color: transparent;
}

.qt-sdk-content-item-text-css {
  width: 200px;
  height: 200px;
  text-align: center;
  color: black;
}

</style>
