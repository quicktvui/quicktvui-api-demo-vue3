<template>
  <qt-view class="es-sdk-root-css" ref="root_view">
    <qt-view class="es-sdk-splash-logo-css">
      <qt-image class="es-sdk-splash-css" :src="logo"/>
      <qt-view class="es-sdk-content-column-css">
        <span class="es-sdk-splash-title-css">QuickTVUI API Demo</span>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {useESRouter} from "@extscreen/es3-router";
import logo from '../../assets/logo.png'

export default defineComponent({
  name: "es-splash-page",
  setup() {
    const router = useESRouter();
    const onESCreate = (params) => {
      setTimeout(() => {
        router.push('index')
      }, 1500)
    }

    return {
      onESCreate,
      logo,
    }
  },
});
</script>

<style scoped>

.es-sdk-splash-css {
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
}

.es-sdk-splash-logo-css {
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding-bottom: 150px;
}

.es-sdk-splash-title-css {
  font-size: 50px;
  margin-top: 5px;
  color: white;
}

</style>
