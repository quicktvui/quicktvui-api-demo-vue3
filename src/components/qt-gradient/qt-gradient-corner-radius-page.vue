<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-row class="qt-sdk-content-row-css">
      <qt-view class="qt-sdk-content-item-radius-css"
               :gradientBackground="{type: 0, shape: 0, cornerRadius:5, colors: ['#ff0000', '#00ff00']}">
        <qt-text class="qt-sdk-content-item-text-css" gravity='center' text="CornerRadius：5"/>
      </qt-view>
      <qt-view class="qt-sdk-content-item-radius-css"
               :gradientBackground="{type: 0, shape: 0, cornerRadius:10, colors: ['#ff0000', '#00ff00']}">
        <qt-text class="qt-sdk-content-item-text-css" gravity='center' text="CornerRadius：10"/>
      </qt-view>
      <qt-view class="qt-sdk-content-item-radius-css"
               :gradientBackground="{type: 0, shape: 0, cornerRadius:20, colors: ['#ff0000', '#00ff00']}">
        <qt-text class="qt-sdk-content-item-text-css" gravity='center' text="CornerRadius：20"/>
      </qt-view>
    </qt-row>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'CornerRadius',
});
</script>

<style>
.qt-sdk-content-row-css {
  width: 1920px;
  height: 1080px;
  align-items: center;
  justify-content: center;
}

.qt-sdk-content-item-radius-css {
  width: 250px;
  height: 200px;
  align-items: center;
  justify-content: center;
  margin: 20px;
  background-color: transparent;
}

.qt-sdk-content-item-text-css {
  width: 250px;
  height: 200px;
  text-align: center;
  color: black;
}

</style>
