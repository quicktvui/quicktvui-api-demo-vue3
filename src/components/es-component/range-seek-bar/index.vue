<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-nav-button
        v-for="(item, _) in pageList" :key="item.id"
        :text="item.name"
        :url="`component/rangeseekbar/${item.id}`"/>
    </div>
  </div>
</template>

<script lang="ts">
import ESRangeSeekbarPageList from "./index.js";
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'range-seek-bar',
  setup() {
    const pageList = Object.keys(ESRangeSeekbarPageList).map(data => ({
      id: data,
      name: ESRangeSeekbarPageList[data].name,
    }))

    return {
      pageList
    }
  },
});

</script>
<style>
</style>
