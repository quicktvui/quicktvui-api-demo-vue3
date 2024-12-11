<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="打开其他小程序" @onButtonClicked="launchESApp"/>
      <s-text-button text="关闭当前的小程序" @onButtonClicked="finishESApp"/>
      <s-text-button text="打开其他安卓应用" @onButtonClicked="launchNativeApp"/>
      <s-text-button text="根据包名打开其他安卓应用" @onButtonClicked="launchByPackage"/>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";
import {useESNativeRouter, useESRouter} from "@extscreen/es3-router";

export default defineComponent({
  name: '原生路由',
  setup() {

    const nativeRouter = useESNativeRouter()

    function launchESApp() {
      nativeRouter.push({
        pkg: 'com.quicktvui.app.api'
      })
    }

    function finishESApp() {
      nativeRouter.back()
    }

    function launchNativeApp() {
      nativeRouter.launch([
          // ['-d', 'esapp://action/start?pkg=es.com.dongchedi.tv&from=cmd']
          ['-d', 'tenvideo2://?action=1&cover_id=mzc00200tq7m03f&stay_flag=1&pull_from=1024041']
        ]
      )
    }

    function launchByPackage() {
      nativeRouter.launchByPackage('com.ktcp.video')
    }

    return {
      launchESApp,
      finishESApp,
      launchNativeApp,
      launchByPackage
    }
  }
});

</script>

<style>
</style>
