<template>
  <div class="es-flex-view-one-css">
    <span class="es-flex-text-view-one-css">1</span>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "es-flex-view-one"
});

</script>

<style scoped>
.es-flex-view-one-css {
  background-color: palevioletred;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.es-flex-text-view-one-css {
  font-size: 40px;
  color: #42b983;
}
</style>
