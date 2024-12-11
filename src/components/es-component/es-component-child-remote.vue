<template>
  <div class="es-component-child-css">
    <span>我来自远方。。。</span>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'ChildRemote',
  setup() {
    return {}
  },
});

</script>

<style>
.es-component-child-css {
  width: 200px;
  height: 200px;
  background-color: palevioletred;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
