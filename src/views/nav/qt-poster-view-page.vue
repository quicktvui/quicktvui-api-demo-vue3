<template>
  <qt-view class="quick-ui-root-css">
    <qt-text class="es-sdk-content-title-css">QTPoster</qt-text>
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
import QTPosterPageList from "../../components/qt-poster";

export default defineComponent({
  name: 'QTPoster',
  setup() {
    const pageList = Object.keys(QTPosterPageList).map(data => ({
      id: data,
      name: QTPosterPageList[data].name
    }))
    return {
      pageList,
    }
  },
});
</script>

<style>
</style>
