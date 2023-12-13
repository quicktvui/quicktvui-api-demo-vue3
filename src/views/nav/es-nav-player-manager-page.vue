<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in pageList" :key="item.id"
          :text="item.name"
          :url="`player-manager/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";
import ESPlayerManagerPageList from "../../components/es-player-manager";

export default defineComponent({
  name: '播放管理器',
  setup() {
    const pageList = Object.keys(ESPlayerManagerPageList).map(data => ({
      id: data,
      name: ESPlayerManagerPageList[data].name,
    }))

    return {
      pageList
    }
  },
});

</script>
<style>
</style>
