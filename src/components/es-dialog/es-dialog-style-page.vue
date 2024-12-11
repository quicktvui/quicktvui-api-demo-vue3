<template>
  <div class="es-sdk-dialog-style-root-css">
    <div class="es-sdk-dialog-content-root-css">
      <div class="es-sdk-content-row-css">
        <s-text-view :text="textRef"/>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent, ref} from "@vue/runtime-core";

export default defineComponent({
  name: '弹窗样式',
  setup() {

    const textRef = ref("")

    function onESCreate(params) {
      textRef.value = textRef.value + ' --> ' + 'onESCreate'
    }

    function onESStart() {
      textRef.value = textRef.value + ' --> ' + 'onESStart'
    }

    function onESNewIntent(intent) {
      textRef.value = textRef.value + ' --> ' + 'onESNewIntent'
    }

    function onESRestart() {
      textRef.value = textRef.value + ' --> ' + 'onESRestart'
    }

    function onESRestoreInstanceState(savedInstanceState) {
      textRef.value = textRef.value + ' --> ' + 'onESRestoreInstanceState'
    }

    function onESResume() {
      textRef.value = textRef.value + ' --> ' + 'onESResume'
    }

    function onESPause() {
      textRef.value = textRef.value + ' --> ' + 'onESPause'
    }

    function onESStop() {
      textRef.value = textRef.value + ' --> ' + 'onESStop'
    }

    function onESSaveInstanceState(savedInstanceState) {
      textRef.value = textRef.value + ' --> ' + 'onESSaveInstanceState'
    }

    function onESDestroy() {
      textRef.value = textRef.value + ' --> ' + 'onESDestroy'
    }

    return {
      textRef,
      onESCreate,
      onESStart,
      onESResume,
      onESPause,
      onESStop,
      onESDestroy,
      onESNewIntent,
      onESRestoreInstanceState,
      onESSaveInstanceState,
      onESRestart
    }
  },
});

</script>

<style>
.es-sdk-dialog-style-root-css {
  width: 1920px;
  height: 1080px;
  background-color: transparent;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.es-sdk-dialog-content-root-css {
  width: 960px;
  height: 540px;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
