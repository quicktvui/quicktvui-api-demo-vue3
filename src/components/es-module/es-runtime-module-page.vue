<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view text="运行容器信息"></s-text-view>
      <s-text-view :text="'设备信息：' + deviceInfo"></s-text-view>
      <s-text-view :text="'设备类型：' + deviceType"></s-text-view>
      <s-text-view :text="'设备ID：' + deviceId"></s-text-view>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {useESRuntime} from "@extscreen/es3-core";

export default defineComponent({
  name: '运行时模块',
  setup() {

    const deviceType = ref('')
    const deviceId = ref('')
    const deviceInfo = ref('')
    const runtimeDevice = useESRuntime()
    runtimeDevice.init().then()

    function onESCreate(params) {
      deviceInfo.value = JSON.stringify(runtimeDevice.getRuntimeDeviceInfo())
      deviceId.value = runtimeDevice.getRuntimeDeviceId()
      deviceType.value = runtimeDevice.getRuntimeDeviceType()
    }

    return {
      onESCreate,
      deviceType,
      deviceId,
      deviceInfo
    }
  },
});

</script>
<style>
</style>
