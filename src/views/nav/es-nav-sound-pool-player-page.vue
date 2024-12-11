<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in pageList" :key="item.id"
          :text="item.name"
          :url="`sound-pool/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";
import ESSoundPoolPlayerPageList from "../../components/es-sound-pool-player"

export default defineComponent({
  name: 'SoundPool播放器',
  setup() {
    const pageList = Object.keys(ESSoundPoolPlayerPageList).map(data => ({
      id: data,
      name: ESSoundPoolPlayerPageList[data].name,
    }))

    return {
      pageList
    }
  },
});

</script>
<style>
</style>
