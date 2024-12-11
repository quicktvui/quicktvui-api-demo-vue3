<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="远程组件"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <AsyncChild class="es-sdk-async-child-css"/>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {defineAsyncComponent} from "@vue/runtime-core";
import * as Vue from 'vue'
// import {loadModule} from "vue3-sfc-loader";

const options = {
  moduleCache: {
    vue: Vue,
  },
  async getFile(url) {
    const res = await fetch(url)
    const code = await res.text()
    console.log("===========getFile==========>>>>>>", code)
    return code
  },
  async addStyle(textContent) {
    // const style = Object.assign(document.createElement('style'), {textContent})
    // const ref = document.head.getElementsByTagName('style')[0] || null
    // document.head.insertBefore(style, ref)
  },
}

// const AsyncChild = defineAsyncComponent(
//   async () => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const component = await loadModule(
//           "http://192.168.80.226/es-component-child-remote.vue",
//           options)
//         console.log("===========loadModule==========>>>>>>", component)
//         resolve(component)
//       } catch (e) {
//         console.log("===========loadModule======error====>>>>>>", e)
//         reject()
//       }
//     })
//   })

</script>

<style>
.es-sdk-async-child-css {
  width: 200px;
  height: 200px;
  background-color: #F20C00;
}
</style>
