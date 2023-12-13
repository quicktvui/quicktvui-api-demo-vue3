<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-view text="----------------------系统应用----------------------"></s-text-view>
      <s-text-view v-for="(item, index) in systemAppList" :key="item"
                   :text="JSON.stringify(item)"></s-text-view>
      <s-text-view text="----------------------用户应用----------------------"></s-text-view>
      <s-text-view v-for="(item, index) in userAppList" :key="item"
                   :text="JSON.stringify(item)"></s-text-view>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {useESAppList} from "@extscreen/es3-core";

export default defineComponent({
  name: "应用列表模块",
  setup() {

    const appList = useESAppList()

    const systemAppList = ref([])
    const userAppList = ref([])

    const onESCreate = (params) => {
      appList.getAppList().then(
        (appList) => {
          systemAppList.value = appList.system ?? []
          userAppList.value = appList.user ?? []
        },
        error => {

        })
    }

    return {
      onESCreate,
      systemAppList,
      userAppList,
    }
  },
});

</script>
<style>
</style>
