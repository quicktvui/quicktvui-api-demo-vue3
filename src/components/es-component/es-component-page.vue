<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-button text="加载组件" @onButtonClicked="onButtonClicked"/>
      <component :is="asyncChild" class="async-child-css"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {shallowRef} from "vue";

export default defineComponent({
  name: '异步加载',
  setup() {
    const asyncChild = shallowRef(null)

    async function onButtonClicked() {
      try {
        console.log('-----1--------onButtonClicked-------->>>>')
        const module = await import('./es-component-child-a.vue')
        console.log('----2--------onButtonClicked--------->>>>', module)
        asyncChild.value = module.default
      } catch (e) {
        console.log('-----------onButtonClicked----error---->>>>', e)
      }
    }

    return {
      asyncChild,
      onButtonClicked,
    }
  },
});

</script>

<style>
.async-child-css {
  width: 200px;
  height: 200px;
}
</style>
