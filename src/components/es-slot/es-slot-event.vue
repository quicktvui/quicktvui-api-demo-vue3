<template>
  <div class="es-sdk-slot-root-css es-sdk-slot-green-root-css">
    <s-title-view class="es-sdk-slot-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-slot-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view :text="time"></s-text-view>
      <s-text-view :text="eventText"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from '@vue/runtime-core';
import {ref} from "vue";
import {ESSlotEvent, ESSlotEventName} from "@extscreen/es3-core";
import BuildConfig from "../../build/BuildConfig";

const TAG = 'ESSlotView'

export default defineComponent({
  name: 'JSView事件通信',
  setup() {
    const time = ref<string>("创建时间戳：" + new Date().getTime() + '')
    if (!BuildConfig.enableSlotView) {
      time.value = "》》请首先设置 BuildConfig.ts 中的 enableSlotView = true《《"
    }
    const eventText = ref<string>('')

    function onESSlotEvent(event: ESSlotEvent) {
      eventText.value = JSON.stringify(event)

      //焦点事件
      if (event.eventName == ESSlotEventName.ES_SLOT_EVENT_NAME_FOCUS) {
        if (event.eventData.isFocused) {
          //
        } else {
          //
        }
      } else {

      }
    }

    return {
      time,
      eventText,
      onESSlotEvent,
    }
  },
});
</script>

<style scoped>
.es-sdk-slot-green-root-css {
  background-color: green;
}
</style>
