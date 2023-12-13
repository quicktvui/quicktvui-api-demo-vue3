<template>
  <div class="es-flex-view-three-css">
    <span class="es-flex-text-view-three-css">3</span>
  </div>
</template>

<script>
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "es-flex-view-three"
});

</script>

<style scoped>
.es-flex-view-three-css {
  background-color: #FBDA41;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.es-flex-text-view-three-css {
  font-size: 40px;
  color: #42b983;
}
</style>
