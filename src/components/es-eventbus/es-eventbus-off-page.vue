<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view :text="textRef"/>
      <div class="es-sdk-content-row-css">
        <s-text-button text="监听事件" @onButtonClicked="onOnButtonClicked"/>
        <s-text-button text="取消注册事件" @onButtonClicked="onOffButtonClicked"/>
        <s-text-button text="发送事件" @onButtonClicked="onEmitButtonClicked"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent, ref} from "@vue/runtime-core";
import {useESEventBus} from "@extscreen/es3-core";

const TAG = 'ESEventBus'

export default defineComponent({
  name: '取消注册事件',
  setup() {
    const eventbus = useESEventBus()
    const textRef = ref("")

    const onESCreate = (params) => {

    }

    function onOnButtonClicked() {
      eventbus.on('EventBusEventB', onEvent)
    }

    function onOffButtonClicked() {
      eventbus.off('EventBusEventB', onEvent)
    }

    function onEmitButtonClicked() {
      eventbus.emit('EventBusEventB', 'B事件' + new Date().getTime())
    }

    function onEvent(event) {
      textRef.value = event
    }

    return {
      textRef,
      onESCreate,
      onOnButtonClicked,
      onOffButtonClicked,
      onEmitButtonClicked
    }
  },
});

</script>

<style>
</style>
