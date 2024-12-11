<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in pageList" :key="item.id"
          :text="item.name"
          :url="`audio-service/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";
import ESAudioServicePlayerPageList from "../../components/es-audio-service-player";

export default defineComponent({
  name: '音频播放服务',
  setup() {
    const pageList = Object.keys(ESAudioServicePlayerPageList).map(data => ({
      id: data,
      name: ESAudioServicePlayerPageList[data].name,
    }))

    return {
      pageList
    }
  },
});

</script>
<style>
</style>
