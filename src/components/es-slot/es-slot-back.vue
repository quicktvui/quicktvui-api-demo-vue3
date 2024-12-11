<template>
  <div class="es-sdk-slot-root-css es-sdk-slot-blue-root-css">
    <s-title-view class="es-sdk-slot-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-slot-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view :text="time"></s-text-view>
      <s-text-view text="按返回键查看效果"></s-text-view>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from '@vue/runtime-core';
import {ref} from "vue";
import {useESToast} from "@extscreen/es3-core";
import {useESRouter} from "@extscreen/es3-router";
import BuildConfig from "../../build/BuildConfig";

const TAG = 'ESSlotView'

export default defineComponent({
  name: 'JSView返回键',
  setup() {
    const time = ref<string>("创建时间戳：" + new Date().getTime() + '')
    if (!BuildConfig.enableSlotView) {
      time.value = "》》请首先设置 BuildConfig.ts 中的 enableSlotView = true《《"
    }
    const router = useESRouter()
    const toast = useESToast()

    function onBackPressed() {
      toast.showToast("按了返回键");
      router.back()
    }

    return {
      time,
      onBackPressed,
    }
  },
});
</script>

<style scoped>
.es-sdk-slot-blue-root-css {
  background-color: blue;
}
</style>
