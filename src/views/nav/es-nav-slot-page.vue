<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in pageList" :key="item.id"
          :text="item.name"
          :url="`slot/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";
import ESSlotPageList from "../../components/es-slot/index.js";

export default defineComponent({
  name: 'JSView',
  setup() {
    const pageList = Object.keys(ESSlotPageList).map(data => ({
      id: data,
      name: ESSlotPageList[data].name,
    }))

    return {
      pageList
    }
  },
});

</script>
<style>
</style>
