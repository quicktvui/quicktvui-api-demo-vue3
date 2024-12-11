<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="设置打印日志级别" @onButtonClicked="onButtonClicked"/>
      <s-text-button text="设置打印日志级别1" @onButtonClicked="onButtonClicked1"/>
      <s-text-button text="设置打印日志级别2" @onButtonClicked="onButtonClicked2"/>
      <s-text-button text="设置打印日志级别3" @onButtonClicked="onButtonClicked3"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ESXLogLevel, useESToast, useESXLog} from "@extscreen/es3-core";
import {Native} from "@extscreen/es3-vue";

export default defineComponent({
  name: '日志打印级别',
  setup() {
    const Xlog = useESXLog()
    const toast = useESToast()

    function onButtonClicked() {
      //Xlog.setMinimumLoggingLevel(ESXLogLevel.DEBUG);
      Native.callNative('ESBiliPlayerModule', 'initBiliSdk');
      toast.showToast('1111111111111')
    }

    function onButtonClicked1() {
      Native.callNative('ESBiliPlayerModule', 'getDeviceId');
      toast.showToast('222222222')
    }

    function onButtonClicked2() {
      Native.callNative('ESBiliPlayerModule', 'getDeviceId');
      toast.showToast('33333333333')
    }

    function onButtonClicked3() {
      Native.callNative('ESBiliPlayerModule', 'updateUserInfo',true);
      toast.showToast('444444444444')
    }

    return {
      onButtonClicked,
      onButtonClicked1,
      onButtonClicked2,
      onButtonClicked3
    }
  },
});

</script>

<style>
</style>
