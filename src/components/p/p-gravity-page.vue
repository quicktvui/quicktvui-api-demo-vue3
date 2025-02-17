<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-column class="qt-p-gravity-page">
      <qt-row>
        <p class="qt-text-center" :fontSize="44">center</p>
      </qt-row>
      <qt-row>
        <p class="qt-text-start" :fontSize="44">left</p>
        <p class="qt-text-end" :fontSize="44">right</p>
      </qt-row>
    </qt-column>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'Gravity',
  setup(props, context) {
    return {}
  },
});
</script>

<style>
.qt-p-gravity-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.qt-p-gravity-page .qt-text-start {
  width: 800px;
  height: 150px;
  margin: 15px;
  color: #5096f7;
  text-align: left;
  background-color: #f5f7fa;
}

.qt-p-gravity-page .qt-text-end {
  width: 800px;
  height: 150px;
  margin: 15px;
  color: #5096f7;
  text-align: right;
  background-color: #f5f7fa;
}

.qt-p-gravity-page .qt-text-center {
  width: 1630px;
  height: 150px;
  margin: 15px;
  color: #5096f7;
  text-align: center;
  background-color: #f5f7fa;
}
</style>
