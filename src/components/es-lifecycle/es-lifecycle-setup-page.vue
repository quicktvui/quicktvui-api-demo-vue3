<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="setup语法糖"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-view :text="textRef"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "@vue/runtime-core";

const textRef = ref<string>("生命周期")

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

defineExpose({
  onESCreate,
  onESStart,
  onESNewIntent,
  onESRestart,
  onESRestoreInstanceState,
  onESResume,
  onESPause,
  onESStop,
  onESSaveInstanceState,
  onESDestroy
})

</script>

<style>

</style>
