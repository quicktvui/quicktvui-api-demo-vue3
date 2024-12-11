<template>
  <qt-view class="quick-ui-root-css">
    <qt-text class="es-sdk-content-title-css">QTGridView</qt-text>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in pageList"
        :key="item.id"
        :text="item.name"
        :url="`${item.id}`"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import QTGridViewPageList from "../../components/qt-grid-view";

export default defineComponent({
  name: 'QTGridView',
  setup() {
    const pageList = Object.keys(QTGridViewPageList).map(data => ({
      id: data,
      name: QTGridViewPageList[data].name
    }))
    return {
      pageList,
    }
  },
});
</script>

<style>
</style>
