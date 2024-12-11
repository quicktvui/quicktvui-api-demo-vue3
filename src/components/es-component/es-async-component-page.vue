<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="异步组件"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <!--      <s-text-button text="加载组件" @onButtonClicked="onButtonClicked"/>-->
      <!--      <AsyncChild /> v-if="showChild" -->
      <!--      <suspense>-->
      <!--        <template>-->
      <!--         -->
      <!--        </template>-->
      <!--      </suspense>-->

      <AsyncChild class="es-sdk-async-child-css"/>
      <!--      <lazy-component v-if="showChild"/>-->
    </div>
  </div>
</template>

<script lang="ts" setup>

import {defineAsyncComponent, defineComponent} from "@vue/runtime-core";
import {ref} from 'vue';

const showChild = ref(false)
const AsyncChild = defineAsyncComponent(
  () => import('./es-component-child-a.vue'))

function onButtonClicked() {
  showChild.value = true
}

</script>

<style>
.es-sdk-async-child-css {
  width: 200px;
  height: 200px;
  background-color: #F20C00;
}
</style>
