<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-column class="qt-text-ellipsize-mode-page">
      <qt-row>
        <qt-text text="ellipsizeMode=0(start)" class="qt-title-text" :maxLines="1" :fontSize="44"/>
        <qt-text text="这是超长文字超长文字超长文字超长文字超长文字" class="qt-text" :maxLines="1" :fontSize="44"
                 :ellipsizeMode="0"/>
      </qt-row>
      <qt-row>
        <qt-text text="ellipsizeMode=1(middle)" class="qt-title-text" :maxLines="1" :fontSize="44"/>
        <qt-text text="这是超长文字超长文字超长文字超长文字超长文字" class="qt-text" :maxLines="1" :fontSize="44"
                 :ellipsizeMode="1"/>
      </qt-row>
      <qt-row>
        <qt-text text="ellipsizeMode=2(end)" class="qt-title-text" :maxLines="1" :fontSize="44"/>
        <qt-text text="这是超长文字超长文字超长文字超长文字超长文字" class="qt-text" :maxLines="1" :fontSize="44"
                 :ellipsizeMode="2"/>
      </qt-row>
      <qt-row>
        <qt-text text="ellipsizeMode=3(marqeue)" class="qt-title-text" :maxLines="1" :fontSize="44"/>
        <qt-text text="这是超长文字超长文字超长文字超长文字超长文字" class="qt-text" :maxLines="1" :fontSize="44"
                 :select="true" :ellipsizeMode="3"/>
      </qt-row>
      <qt-row>
        <qt-text text="ellipsizeMode=4(marquee on focus)" class="qt-title-text" :maxLines="1" :fontSize="44"/>
        <qt-text text="这是超长文字超长文字超长文字超长文字超长文字" class="qt-text" :maxLines="1"
                 :fontSize="44" :ellipsizeMode="4"/>
      </qt-row>
    </qt-column>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'EllipsizeMode',
  setup(props, context) {
    return {}
  },
});
</script>

<style>
.qt-text-ellipsize-mode-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.qt-text-ellipsize-mode-page .qt-title-text {
  width: 800px;
  height: 60px;
  margin: 15px;
  color: #5096f7;
  background-color: #f5f7fa;
}

.qt-text-ellipsize-mode-page .qt-text {
  width: 600px;
  height: 60px;
  margin: 15px;
  color: #5096f7;
  background-color: #f5f7fa;
}
</style>
