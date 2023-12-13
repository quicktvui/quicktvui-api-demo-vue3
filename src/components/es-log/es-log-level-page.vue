<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="设置打印日志级别" @onButtonClicked="onButtonClicked"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";

export default defineComponent({
  name: '日志打印级别',
  setup() {
    const log = useESLog()

    function onButtonClicked() {
      log.setMinimumLoggingLevel(ESLogLevel.DEBUG);
    }

    return {
      onButtonClicked
    }
  },
});

</script>

<style>
</style>
