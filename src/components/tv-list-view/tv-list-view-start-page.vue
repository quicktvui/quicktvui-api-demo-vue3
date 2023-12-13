<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="currentName"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <tv-list ref="listViewRef" class="qt_tv_list_root_css" horizontal="true">
        <div class="qt_tv_list_item_root_css" type="1">
        </div>
      </tv-list>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {useESRouter} from "@extscreen/es3-router";

export default defineComponent({
  name: '使用初探',
  setup(props, context) {
    const router = useESRouter()
    const currentName =  router.currentRoute['_value'].matched[0].components.default.name
    const listViewRef = ref()

    const onESCreate = (params) => {
      console.log('------------onESCreate------>>>>')
      listViewRef.value?.setListData([
        {
          type: 1,
        }
      ])
    }

    return {
      listViewRef,
      currentName,
      onESCreate,
    }
  },
});

</script>

<style>
.qt_tv_list_root_css {
  width: 1920px;
  height: 1080px;
  background-color: red;
}

.qt_tv_list_item_root_css {
  width: 1920px;
  height: 108px;
  background-color: #7415B1;
}
</style>
