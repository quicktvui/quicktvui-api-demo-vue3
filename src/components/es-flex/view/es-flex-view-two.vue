<template>
  <div class="es-flex-view-two-css">
    <span class="es-flex-text-view-two-css">2</span>
  </div>
</template>

<script>
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "es-flex-view-two"
});

</script>

<style scoped>
.es-flex-view-two-css {
  background-color: #002FA7;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.es-flex-text-view-two-css {
  font-size: 40px;
  color: #42b983;
}
</style>
