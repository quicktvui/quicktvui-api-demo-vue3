<template>
  <div class="es-sdk-slot-root-css es-sdk-slot-palevioletred-root-css">
    <s-title-view class="es-sdk-slot-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-slot-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view :text="time"></s-text-view>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from '@vue/runtime-core';
import {ref} from "vue";
import {useESSlot} from "@extscreen/es3-core";
import BuildConfig from "../../build/BuildConfig";

const TAG = 'ESSlotView'

export default defineComponent({
  name: 'JSView Suspend',
  setup(props, context) {

    const time = ref<string>("创建时间戳：" + new Date().getTime() + '')
    if (!BuildConfig.enableSlotView) {
      time.value = " 》》请首先设置 BuildConfig.ts 中的 enableSlotView = true《《"
    }

    const slot = useESSlot()

    function onESCreate(params) {
      slot.suspend(context)
    }

    return {
      time,
      onESCreate
    }
  },
});
</script>

<style scoped>
.es-sdk-slot-palevioletred-root-css {
  background-color: palevioletred;
}
</style>
