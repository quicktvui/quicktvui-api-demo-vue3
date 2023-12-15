<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="打印日志" @onButtonClicked="onButtonClicked"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";

const TAG = 'LogSamplePage'

export default defineComponent({
  name: '使用初探',
  setup() {
    const log = useESLog()

    function onButtonClicked() {

      if (log.isLoggable(ESLogLevel.VERBOSE)) {
        log.v(TAG, "----------VERBOSE--------->>>")
      }
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, "----------DEBUG--------->>>")
      }
      if (log.isLoggable(ESLogLevel.INFO)) {
        log.i(TAG, "----------INFO--------->>>")
      }
      if (log.isLoggable(ESLogLevel.WARN)) {
        log.w(TAG, "----------WARN--------->>>")
      }
      if (log.isLoggable(ESLogLevel.ERROR)) {
        log.e(TAG, "----------ERROR--------->>>")
      }
    }

    return {
      onButtonClicked
    }
  },
});

</script>

<style>
</style>
