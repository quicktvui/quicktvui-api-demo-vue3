<template>
    <qt-view class="es-sdk-root-css" :clipChildren="false">
      <qt-text class="es-sdk-content-title-css"> img-transition </qt-text>
      <qt-view class="es-sdk-content-divider-css"/>
      <qt-view class="img-transition-start-page">
        <img-transition ref="imgTransitionRef" style="width:1920px; height:1000px; position: absolute;" :transitionTime='500'/>
        <qt-button text="切换图片" @click="transitionImage" style="background-color: green;"></qt-button>
        <qt-button text="切换颜色" @click="transitionColor" style="background-color: green;margin-top: 20px;"></qt-button>
    </qt-view>
    </qt-view>
  </template>
  
  <script lang="ts">
  import {defineComponent} from "@vue/runtime-core";
  import {ref,reactive,watch,watchEffect} from "vue";
  import {ESITransitionImage} from "@extscreen/es3-component"
  
  export default defineComponent({
    name: 'img-transition 使用初探',
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
  .img-transition-start-page {
    width: 1920px;
    height: 1000px;
    background-color: transparent;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  </style>
  