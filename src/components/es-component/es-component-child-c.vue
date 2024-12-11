<template>
  <div class="es-component-child-css">
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'ChildC',
  setup() {
    return {}
  },
});

</script>

<style>
.es-component-child-css {
  width: 200px;
  height: 200px;
  background-color: green;
}
</style>
