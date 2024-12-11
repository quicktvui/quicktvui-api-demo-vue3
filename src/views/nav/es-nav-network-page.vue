<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in pageList" :key="item.id"
          :text="item.name"
          :url="`network/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";
import ESNetworkPageList from "../../components/es-network";

export default defineComponent({
  name: '网络',
  setup() {
    const pageList = Object.keys(ESNetworkPageList).map(data => ({
      id: data,
      name: ESNetworkPageList[data].name,
    }))

    return {
      pageList
    }
  },
});

</script>
<style>
</style>
