<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view text="设备信息模块用来获取开发相关设备信息"></s-text-view>
      <s-text-view :text="'androidAPILevel：' + androidAPILevel + '   buildSDKVersion：' + buildSDKVersion"></s-text-view>
      <s-text-view :text="'totalMemory：' + totalMemory + '   availMemory：' + availMemory"></s-text-view>
      <s-text-view :text="'screenWidth：' + screenWidth + '   screenHeight：' + screenHeight"></s-text-view>
      <s-text-view :text="'deviceEthMac：' + deviceEthMac + '   deviceWifiMac：' + deviceWifiMac"></s-text-view>
      <s-text-view :text="'ipAddress：' + ipAddress"></s-text-view>

      <s-text-view :text="'resolution：' + resolution + '   density：' + density +
      '   densityDpi：' + densityDpi + '   scaledDensity：' + scaledDensity"></s-text-view>

      <s-text-view
        :text="'buildVersionRelease：' + buildVersionRelease + '   buildManufacturer：' + buildManufacturer"></s-text-view>
      <s-text-view :text="'buildSerial：' + buildSerial + '   buildModel：' + buildModel"></s-text-view>
      <s-text-view :text="'buildBrand：' + buildBrand + '   buildDevice：' + buildDevice"></s-text-view>
      <s-text-view :text="'buildProduct：' + buildProduct + '   buildHardware：' + buildHardware"></s-text-view>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {useESDevelop, useESDevice} from "@extscreen/es3-core";

export default defineComponent({
  name: "设备信息模块",
  setup() {

    const device = useESDevice()

    const totalMemory = ref(0)
    const availMemory = ref(0)

    const screenWidth = ref(0)
    const screenHeight = ref(0)

    const androidAPILevel = ref('')

    const deviceEthMac = ref('')
    const deviceWifiMac = ref('')

    const buildManufacturer = ref('')
    const buildVersionRelease = ref('')
    const buildModel = ref('')
    const buildBrand = ref('')
    const buildDevice = ref('')
    const buildProduct = ref('')
    const buildHardware = ref('')
    const buildSDKVersion = ref(-1)

    const ipAddress = ref('')

    const buildSerial = ref('')

    const resolution = ref('')
    const density = ref(-1)
    const densityDpi = ref(-1)
    const scaledDensity = ref(-1)

    const onESCreate = (params) => {

      totalMemory.value = device.getDeviceTotalMemory()
      availMemory.value = device.getDeviceTotalMemory()

      screenWidth.value = device.getScreenWidth()
      screenHeight.value = device.getScreenHeight()

      androidAPILevel.value = device.getAndroidAPILevel() ?? ''

      deviceEthMac.value = device.getDeviceEthMac()
      deviceWifiMac.value = device.getDeviceWifiMac()

      buildManufacturer.value = device.getBuildManufacturer()
      buildVersionRelease.value = device.getBuildVersionRelease()
      buildModel.value = device.getBuildModel()
      buildBrand.value = device.getBuildBrand()
      buildDevice.value = device.getBuildDevice()
      buildProduct.value = device.getBuildProduct()
      buildHardware.value = device.getBuildHardware()
      buildSDKVersion.value = device.getBuildVersionSDKInt()

      ipAddress.value = device.getIPAddress()

      buildSerial.value = device.getBuildSerial()

      resolution.value = device.getResolution()
      density.value = device.getDensity()
      densityDpi.value = device.getDensityDpi()
      scaledDensity.value = device.getScaledDensity()

    }

    return {
      onESCreate,
      totalMemory,
      availMemory,

      screenWidth,
      screenHeight,

      androidAPILevel,

      deviceEthMac,
      deviceWifiMac,

      buildManufacturer,
      buildVersionRelease,
      buildModel,
      buildBrand,
      buildDevice,
      buildProduct,
      buildHardware,
      buildSDKVersion,

      ipAddress,

      buildSerial,

      resolution,
      density,
      densityDpi,
      scaledDensity,
    }
  },
});

</script>
<style>
</style>
