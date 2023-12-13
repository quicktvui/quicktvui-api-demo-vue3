<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-text-button text="Post" @onButtonClicked="onPostButtonClicked"/>
        <s-text-button text="Get" @onButtonClicked="onGetButtonClicked"/>
      </div>
      <s-text-view :text="data"></s-text-view>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";

export default defineComponent({
  name: 'fetch',
  setup() {
    const data = ref('')

    function onPostButtonClicked() {
      onButtonClicked('POST')
    }

    function onGetButtonClicked() {
      onButtonClicked('GET')
    }

    function onButtonClicked(method) {
      console.log('--------onButtonClicked-------------->>>>>')
      fetch('http://extscreen.com', {
        method: method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        console.log('--------response-------------->>>>>', response)
        return response.text()
      })
        .then((d) => {
          data.value = d
        })
    }

    return {
      data,
      onPostButtonClicked,
      onGetButtonClicked,
      onButtonClicked
    }
  },
});

</script>

<style>
</style>
