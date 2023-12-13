<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-button text="切换图片" @onButtonClicked="switchImage"/>
    </div>
    <img class="es-sdk-assets-img-css" src="../../../assets/logo.png">
    <img class="es-sdk-assets-img-css" :src="imgSrcRef">
  </div>
</template>
<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import imageC from '../../../assets/ic_gun.jpg'

export default defineComponent({
  name: 'AssetsImage',
  setup() {
    const imageA = require('../../../assets/logo.png').default;
    const imageB = require('../../../assets/ic_car.jpg').default;

    const imgSrcRef = ref<string>('')
    let flag = false

    function switchImage() {
      if (flag) {
        imgSrcRef.value = imageC
      } else {
        imgSrcRef.value = imageB
      }
      flag = !flag
    }

    return {
      imageA,
      imageB,
      imageC,
      imgSrcRef,
      switchImage
    }
  },
});

</script>

<style>
.es-sdk-assets-img-css {
  width: 300px;
  height: 300px;
}
</style>
