<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="显示" @onButtonClicked="onShowButtonClicked"/>
      <s-text-button text="隐藏" @onButtonClicked="onDismissButtonClicked"/>
      <s-text-button text="是否正在显示" @onButtonClicked="getActionBarIsShowing"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {useESActionBar, useESToast} from "@extscreen/es3-core";

export default defineComponent({
  name: "顶部菜单条",
  setup() {

    const actionBar = useESActionBar()
    const toast = useESToast()

    function onShowButtonClicked() {
      actionBar.show()
      setTimeout(() => {
        actionBar.dismiss()
      }, 5000)
    }

    function onDismissButtonClicked() {
      actionBar.dismiss()
    }

    function getActionBarIsShowing() {
      actionBar.isShowing().then((show => {
        console.log('------------getActionBarIsShowing--------->>>>', show)
        toast.showToast("ActionBarIsShowing:" + show);
      }))
    }

    return {
      onShowButtonClicked,
      onDismissButtonClicked,
      getActionBarIsShowing
    }
  },
});

</script>
<style>
</style>
