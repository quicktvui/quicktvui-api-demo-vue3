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
  name: '监听按键分发',
  setup() {
    const toast = useESToast()
    const log = useESLog()
    const textRef = ref<string>('按键查看效果')

    function onDispatchKeyEvent(keyEvent: ESKeyEvent) {
      toast.showToast("onKeyDown" + JSON.stringify(keyEvent))
      textRef.value = JSON.stringify(keyEvent)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-----------onKeyDown------->>>', keyEvent)
      }
    }

    return {
      textRef,
      onDispatchKeyEvent,
    }
  }
});

</script>

<style>
</style>
