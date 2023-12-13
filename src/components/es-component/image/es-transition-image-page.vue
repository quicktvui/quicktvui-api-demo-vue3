<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <img-transition ref="imgTransitionRef" style="width:1920px; height:1080px; position: absolute; top:120px"
                    :transitionTime='500'/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-button text="切换图片" @onButtonClicked="transitionImage"/>
      <s-text-button text="切换颜色" @onButtonClicked="transitionColor"/>
    </div>
  </div>
</template>
<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ESITransitionImage} from "@extscreen/es3-component"
import {ref} from "vue";

export default defineComponent({
  name: 'ImageTransition',
  setup() {
    const images = [
      'http://fitimg.fangtangtv.com/tab/tab1block1-1bg1.jpg',
      'http://fitimg.fangtangtv.com/tab/tab1block1-2bg1.jpg',
      'http://fitimg.fangtangtv.com/tab/tab1block1-3bg1.jpg',
      'http://fitimg.fangtangtv.com/tab/tab1block1-4bg1.jpg',
    ];

    const colors = [
      '#AC78F5',
      -1,
      '#5AF285',
      -16711681,
      '#F5C94D',
      -12303292,
      '#1A99D9',
      -65281,
      '#DB5B3F',
    ]

    let index = 0
    const imgTransitionRef = ref<ESITransitionImage>()

    function transitionColor() {
      imgTransitionRef.value?.setNextColor(colors[++index % colors.length]);
    }

    function transitionImage() {
      imgTransitionRef.value?.setNextImage(images[++index % images.length]);
    }

    return {
      imgTransitionRef,
      images,
      colors,
      transitionColor,
      transitionImage
    }
  },
});

</script>

<style>
</style>
