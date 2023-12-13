<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <es-x5web-view
        @onPageStarted="onPageStarted"
        @onJsRewardCall="onJsRewardCall"
        @onJsFinishGame="onJsFinishGame"
        @onJavascriptReceiveValue="onJavascriptReceiveValue"
        ref="webview"
        class="es-sdk-web-view-css"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
// import {ESIX5WebView} from "@extscreen/es3-component";
import {ESIX5WebView} from "packages/ESComponent/src/ESX5WebView/ESIX5WebView"
import {useESToast} from "@extscreen/es3-core";

export default defineComponent({
  name: 'es-x5web-view-game-demo',
  setup() {
    const webview = ref<ESIX5WebView>()
    const toast = useESToast();

    function onPageStarted(url) {
    }

    function onESCreate(params) {
      // webview.value?.loadUrl('https://juejin.cn')
      webview.value?.loadUrl('https://game.extscreen.com/chrome-dino/index.html')
      webview.value?.initJavaScriptInterface()
    }

    function onJavascriptReceiveValue(res) {
     toast.showToast('返回值--->'+res)
    }

    function onJsRewardCall(params) {
      console.log('test--->' + params)
      let result = {
        gameId: "123456",
        rewardId: "123456",
        eventId: "",
        status: "FAILE",
        timestamp: "",
        sign: ""
      }
      let result11 = JSON.stringify(result);
      setTimeout(() => {
        let value = "javascript:rewardCallBack('" + result11 + "')"
        // let value1 = "javascript:rewardCallBack('{\"gameId\":\"123456\",\"rewardId\":\"123456\",\"eventId\":\"\",\"status\":\"FAILE\",\"timestamp\":\"\",\"sign\":\"\"}')"
        console.log('test--->' + value)
        webview.value?.evaluateJavascript(value).then((res) => {
          console.log('test--->' + res)
        })
      }, 1000)
    }

    function onJsFinishGame(params) {
      console.log('test--->' + params)
    }

    return {
      webview,
      onESCreate,
      onPageStarted,
      onJsRewardCall,
      onJsFinishGame,
      onJavascriptReceiveValue
    }
  },
});

</script>

<style>
.es-sdk-web-view-css {
  width: 1920px;
  height: 1080px;
}
</style>
