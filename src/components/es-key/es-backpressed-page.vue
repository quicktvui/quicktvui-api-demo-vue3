<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-view text="按返回键查看效果"></s-text-view>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {useESToast} from "@extscreen/es3-core";
import {useESRouter} from "@extscreen/es3-router";

export default defineComponent({
  name: '返回键',
  setup() {
    const toast = useESToast()
    const router = useESRouter()

    function onBackPressed() {
      toast.showToast("按了返回键");
      router.back()
    }

    return {
      onBackPressed,
    }
  }
});

</script>

<style>
</style>
