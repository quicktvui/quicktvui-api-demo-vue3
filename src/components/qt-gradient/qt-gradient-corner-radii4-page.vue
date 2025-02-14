<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-row class="qt-sdk-content-row-css">
      <qt-view class="qt-sdk-content-item-css"
               :gradientBackground="{type: 0, shape: 0, cornerRadii4: [30,30,30,30], colors: ['#ff0000', '#00ff00']}">
        <qt-text class="qt-sdk-content-item-text-css" gravity='center' text="cornerRadii4: [30,30,30,30]"/>
      </qt-view>
      <qt-view class="qt-sdk-content-item-css"
               :gradientBackground="{type: 0, shape: 0, cornerRadii4: [10,30,20,0], colors: ['#ff0000', '#00ff00']}">
        <qt-text class="qt-sdk-content-item-text-css" gravity='center' text="cornerRadii4: [10,30,20,0]"/>
      </qt-view>
      <qt-view class="qt-sdk-content-item-css"
               :gradientBackground="{type: 0, shape: 0, cornerRadii4: [10,0,30,5], colors: ['#ff0000', '#00ff00']}">
        <qt-text class="qt-sdk-content-item-text-css" gravity='center' text="cornerRadii4: [10,0,30,5]"/>
      </qt-view>
    </qt-row>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'cornerRadii4',
});
</script>

<style>
.qt-sdk-content-row-css {
  width: 1920px;
  height: 1080px;
  align-items: center;
  justify-content: center;
}

.qt-sdk-content-item-css {
  width: 400px;
  height: 200px;
  align-items: center;
  justify-content: center;
  margin: 20px;
  background-color: transparent;
}

.qt-sdk-content-item-text-css {
  width: 400px;
  height: 200px;
  text-align: center;
  color: black;
}

</style>
