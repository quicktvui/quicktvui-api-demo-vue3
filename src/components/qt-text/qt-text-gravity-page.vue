<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-column class="qt-text-gravity-page">
      <qt-row>
        <qt-text text="center" class="qt-text-center" gravity="center" :maxLines="1" :fontSize="44"/>
      </qt-row>
      <qt-row>
        <qt-text text="top" class="qt-text" gravity="top" :maxLines="1" :fontSize="44"/>
        <qt-text text="bottom" class="qt-text" gravity="bottom" :maxLines="1" :fontSize="44"/>
      </qt-row>
      <qt-row>
        <qt-text text="end" class="qt-text" gravity="end" :maxLines="1" :fontSize="44"/>
        <qt-text text="start" class="qt-text" gravity="start" :maxLines="1" :fontSize="44"/>
      </qt-row>
      <qt-row>
        <qt-text text="centerHorizontal" class="qt-text" gravity="centerHorizontal" :maxLines="1" :fontSize="44"/>
        <qt-text text="centerHorizontal | bottom" class="qt-text" gravity="centerHorizontal|bottom" :maxLines="1"
                 :fontSize="44"/>
      </qt-row>
      <qt-row>
        <qt-text text="centerVertical" class="qt-text" gravity="centerVertical" :maxLines="1" :fontSize="44"/>
        <qt-text text="centerVertical | right" class="qt-text" gravity="centerVertical|right" :maxLines="1"
                 :fontSize="44"/>
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
.qt-text-gravity-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.qt-text-gravity-page .qt-text {
  width: 800px;
  height: 150px;
  margin: 15px;
  color: #5096f7;
  background-color: #f5f7fa;
}

.qt-text-gravity-page .qt-text-center {
  width: 1630px;
  height: 150px;
  margin: 15px;
  color: #5096f7;
  background-color: #f5f7fa;
}
</style>
