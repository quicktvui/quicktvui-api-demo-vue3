<template>
  <div id="root">
    <es-router-view/>
  </div>
</template>

<script>
import {defineComponent} from '@vue/runtime-core';
import {ESLogLevel, useESDevice, useESLog, useESRuntime} from "@extscreen/es3-core";
import {useESPlayer} from "@extscreen/es3-player";
import {useRequestManager} from "./request/useApi";
import {useQTDataSource} from "./datasource/useApi";

export default defineComponent({
  name: 'App',
  setup() {
    const log = useESLog()
    log.setMinimumLoggingLevel(ESLogLevel.DEBUG)
    const playerManager = useESPlayer()
    const runtime = useESRuntime()
    const device = useESDevice()

    //
    const request = useRequestManager()
    const dataSource = useQTDataSource()

    function onESCreate(app, params) {
      return Promise.resolve()
        .then(() => request.init(log))
        .then(() => dataSource.init(request))
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
