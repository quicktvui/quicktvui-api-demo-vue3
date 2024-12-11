<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-column-css">
        <s-text-view text="flex-direction:"></s-text-view>
        <div class="es-sdk-content-row-css">
          <s-nav-button
            v-for="(item, _) in directionList" :key="item.id"
            :text="item.name"
            :url="`flex/${item.id}`"/>
        </div>
      </div>
      <div class="es-sdk-content-column-css">
        <s-text-view text="flex-wrap:"></s-text-view>
        <div class="es-sdk-content-row-css">
          <s-nav-button
            v-for="(item, _) in wrapList" :key="item.id"
            :text="item.name"
            :url="`flex/${item.id}`"/>
        </div>
      </div>
      <div class="es-sdk-content-column-css">
        <s-text-view text="justify-content:"></s-text-view>
        <div class="es-sdk-content-row-css">
          <s-nav-button
            v-for="(item, _) in justifyContentList" :key="item.id"
            :text="item.name"
            :url="`flex/${item.id}`"/>
        </div>
      </div>
    </div>
    <div class="es-sdk-content-column-css">
      <s-text-view text="align-items:"></s-text-view>
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in alignItemsList" :key="item.id"
          :text="item.name"
          :url="`flex/${item.id}`"/>
      </div>
    </div>
    <div class="es-sdk-content-column-css">
      <s-text-view text="align-content:"></s-text-view>
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in alignContentList" :key="item.id"
          :text="item.name"
          :url="`flex/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";
import ESFlexDirectionPageList from "../../components/es-flex/direction";
import ESFlexWrapPageList from "../../components/es-flex/wrap";
import ESFlexJustifyContentPageList from "../../components/es-flex/justify-content";
import ESFlexAlignItemsPageList from "../../components/es-flex/align-items";
import ESFlexAlignContentPageList from "../../components/es-flex/align-content";

export default defineComponent({
  name: '布局',
  setup() {
    const directionList = Object.keys(ESFlexDirectionPageList).map(data => ({
      id: data,
      name: ESFlexDirectionPageList[data].name,
    }))

    const wrapList = Object.keys(ESFlexWrapPageList).map(data => ({
      id: data,
      name: ESFlexWrapPageList[data].name,
    }))

    const justifyContentList = Object.keys(ESFlexJustifyContentPageList).map(data => ({
      id: data,
      name: ESFlexJustifyContentPageList[data].name,
    }))

    const alignItemsList = Object.keys(ESFlexAlignItemsPageList).map(data => ({
      id: data,
      name: ESFlexAlignItemsPageList[data].name,
    }))

    const alignContentList = Object.keys(ESFlexAlignContentPageList).map(data => ({
      id: data,
      name: ESFlexAlignContentPageList[data].name,
    }))

    return {
      directionList,
      wrapList,
      justifyContentList,
      alignItemsList,
      alignContentList
    }
  },
});

</script>
<style>
</style>
