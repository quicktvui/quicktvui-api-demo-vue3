<template>
  <div id="root">
    <es-router-view/>
  </div>
</template>

<script>
import {defineComponent} from '@vue/runtime-core';
import {ESLogLevel, useESDevice, useESLog, useESRuntime} from "@extscreen/es3-core";
import {useESPlayer} from "@extscreen/es3-player";

export default defineComponent({
  name: 'App',
  setup() {
    const log = useESLog()
    log.setMinimumLoggingLevel(ESLogLevel.DEBUG)
    const playerManager = useESPlayer()
    const runtime = useESRuntime()
    const device = useESDevice()

    function onESCreate(app, params) {
      console.log("--1-应用----app-------onESCreate---->>>>>", params)
      return Promise.resolve()
        .then(() => {
          return playerManager.init({
            debug: true,
            display: {
              screenWidth: device.getScreenWidth(),
              screenHeight: device.getScreenHeight(),
            },
            device: {
              deviceType: runtime.getRuntimeDeviceType() ?? ''
            }
          })
        })
    }

    return {
      onESCreate
    };
  },
});

</script>

<style scoped>
#root {
  width: 1920px;
  height: 1080px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

</style>
