<template>
  <div class="es-flex-view-five-css">
    <span class="es-flex-text-view-five-css">5</span>
  </div>
</template>

<script>
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "es-flex-view-five"
});

</script>

<style scoped>
.es-flex-view-five-css {
  background-color: #F20C00;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.es-flex-text-view-five-css {
  font-size: 40px;
  color: #42b983;
}
</style>
