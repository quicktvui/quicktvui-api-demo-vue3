<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-view :text="textRef"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ESKeyEvent, ESLogLevel, useESLog, useESToast} from "@extscreen/es3-core";
import {ref} from "vue";

const TAG = 'ESKeyEvent'

export default defineComponent({
  name: '按键',
  setup() {
    const toast = useESToast()
    const log = useESLog()
    const textRef = ref<string>('按键查看效果')

    let lastKeyEventTime = new Date().getTime()

    function onKeyDown(keyEvent: ESKeyEvent) {
      toast.showToast("onKeyDown" + JSON.stringify(keyEvent))
      const now = new Date().getTime()
      const diff = (now - lastKeyEventTime)
      textRef.value = JSON.stringify(keyEvent) + '::' + diff
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-----------onKeyDown------->>>', keyEvent, diff)
      }
      lastKeyEventTime = now
    }

    function onKeyUp(keyEvent: ESKeyEvent) {
      toast.showToast("onKeyUp" + JSON.stringify(keyEvent))
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---------------onKeyUp------->>>', keyEvent)
      }
    }

    return {
      textRef,
      onKeyDown,
      onKeyUp
    }
  }
});

</script>

<style>
</style>
