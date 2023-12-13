<template>
    <qt-view class="es-sdk-root-css" :clipChildren="false">
      <qt-text class="es-sdk-content-title-css"> iframe </qt-text>
      <qt-view class="es-sdk-content-divider-css"/>
      <qt-view class="iframe-start-page">
        <iframe style="width: 1000px; height: 700px;" ref="iframe" src="http://baidu.com" />
      </qt-view>
    </qt-view>
  </template>
  
  <script lang="ts">
  import {defineComponent} from "@vue/runtime-core";
  
  export default defineComponent({
    name: 'iframe 使用初探',
    setup(props, context) {
      return {
      }
    },
  });
  </script>
  
  <style>
  .iframe-start-page {
    width: 1920px;
    height: 1000px;
    background-color: transparent;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  </style>
  