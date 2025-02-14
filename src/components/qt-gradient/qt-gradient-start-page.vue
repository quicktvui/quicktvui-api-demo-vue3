<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-row class="qt-sdk-content-row-css">
      <qt-view class="qt-sdk-content-item-start-css"
               :gradientBackground="{type: 0, shape: 0,colors: ['#ff0000', '#00ff00'],
               cornerRadii4: [0, 5, 20, 0]}"/>
    </qt-row>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: '使用初探',
});
</script>

<style>
.qt-sdk-content-row-css {
  width: 1920px;
  height: 1080px;
  align-items: center;
  justify-content: center;
}

.qt-sdk-content-item-start-css {
  width: 200px;
  height: 200px;
  align-items: center;
  justify-content: center;
  margin: 20px;
  background-color: transparent;
}

</style>
