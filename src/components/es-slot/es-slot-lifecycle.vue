<template>
  <div class="es-sdk-slot-root-css es-sdk-slot-red-root-css">
    <s-title-view class="es-sdk-slot-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-slot-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view :text="time"></s-text-view>
      <s-text-view :text="textRef"/>
    </div>
  </div>
</template>


<script lang="ts">

import {defineComponent} from '@vue/runtime-core';
import {ref} from "vue";
import {useESLog, ESData} from "@extscreen/es3-core";
import BuildConfig from "../../build/BuildConfig";

const TAG = 'ESSlotView'

export default defineComponent({
  name: 'JSView生命周期',
  setup() {
    const time = ref<string>("创建时间戳：" + new Date().getTime() + '')
    if (!BuildConfig.enableSlotView) {
      time.value = "》》请首先设置 BuildConfig.ts 中的 enableSlotView = true《《"
    }
    const textRef = ref("")

    function onESCreate(params) {
      textRef.value = textRef.value + ' --> ' + 'onESCreate'
        + (" : " + params != undefined ? JSON.stringify(params) : '')
    }

    function onESStart() {
      textRef.value = textRef.value + ' --> ' + 'onESStart'
    }

    function onESRestart() {
      textRef.value = textRef.value + ' --> ' + 'onESRestart'
    }

    function onESResume() {
      textRef.value = textRef.value + ' --> ' + 'onESResume'
    }

    function onESAttached(data?: ESData) {
      textRef.value = textRef.value + ' --> ' + 'onESAttached'
        + (" : " + data != undefined ? JSON.stringify(data) : '')
    }

    function onESBind(data: ESData) {
      textRef.value = textRef.value + ' --> ' + 'onESBind'
        + (" : " + data != undefined ? JSON.stringify(data) : '')
    }

    function onESPause() {
      textRef.value = textRef.value + ' --> ' + 'onESPause'
    }

    function onESStop() {
      textRef.value = textRef.value + ' --> ' + 'onESStop'
    }

    function onESDetached(data?: ESData) {
      textRef.value = textRef.value + ' --> ' + 'onESDetached'
        + (" : " + data != undefined ? JSON.stringify(data) : '')
    }

    function onESRecycle() {
      textRef.value = textRef.value + ' --> ' + 'onESRecycle'
    }

    function onESDestroy() {
      textRef.value = textRef.value + ' --> ' + 'onESDestroy'
    }

    return {
      time,
      textRef,
      onESCreate,
      onESStart,
      onESRestart,
      onESResume,
      onESAttached,
      onESPause,
      onESStop,
      onESDetached,
      onESDestroy,
      onESBind,
      onESRecycle,
    }
  },
});
</script>

<style scoped>

.es-sdk-slot-red-root-css {
  background-color: red;
}
</style>
