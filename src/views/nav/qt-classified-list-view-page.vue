<template>
  <qt-view class="quick-ui-root-css">
    <qt-text class="es-sdk-content-title-css">QTClassifiedListView</qt-text>
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
import QTClassifiedListViewPageList from "../../components/qt-classified-list-view";

export default defineComponent({
  name: 'QTClassifiedListView',
  setup() {
    const pageList = Object.keys(QTClassifiedListViewPageList).map(data => ({
      id: data,
      name: QTClassifiedListViewPageList[data].name
    }))
    return {
      pageList,
    }
  },
});
</script>

<style>
</style>
