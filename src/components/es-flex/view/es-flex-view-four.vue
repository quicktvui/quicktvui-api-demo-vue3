<template>
  <div class="es-flex-view-four-css">
    <span class="es-flex-text-view-four-css">4</span>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "es-flex-view-four"
});

</script>

<style scoped>
.es-flex-view-four-css {
  background-color: #57C3C2;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.es-flex-text-view-four-css {
  font-size: 40px;
  color: #42b983;
}
</style>
