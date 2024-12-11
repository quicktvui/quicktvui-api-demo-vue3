<template>
  <div class="es-sdk-slot-root-css es-sdk-slot-gold-root-css">
    <s-title-view class="es-sdk-slot-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-slot-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view :text="time"></s-text-view>
      <s-text-view :text="textRef"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ESKeyEvent, ESLogLevel, useESLog, useESToast} from "@extscreen/es3-core";
import {ref} from "vue";
import BuildConfig from "../../build/BuildConfig";

const TAG = 'ESKeyEvent'

export default defineComponent({
  name: 'JSView按键',
  setup() {
    const toast = useESToast()
    const log = useESLog()
    const time = ref<string>("创建时间戳：" + new Date().getTime() + '')
    if (!BuildConfig.enableSlotView) {
      time.value = "》》请首先设置 BuildConfig.ts 中的 enableSlotView = true《《"
    }
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
      time,
      onKeyDown,
      onKeyUp
    }
  }
});

</script>

<style>
.es-sdk-slot-gold-root-css {
  background-color: gold;
}
</style>
