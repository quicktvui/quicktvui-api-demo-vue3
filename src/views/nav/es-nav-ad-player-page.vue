<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in pageList" :key="item.id"
          :text="item.name"
          :url="`ad/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";
import ESADPlayerPageList from "../../components/es-ad-player";

export default defineComponent({
  name: '广告播放器',
  setup() {
    const pageList = Object.keys(ESADPlayerPageList).map(data => ({
      id: data,
      name: ESADPlayerPageList[data].name,
    }))

    return {
      pageList
    }
  },
});

</script>
<style>
</style>
