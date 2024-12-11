<template>
  <div class="es-flex-view-six-css">
    <span class="es-flex-text-view-six-css">6</span>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "es-flex-view-six"
});

</script>

<style scoped>
.es-flex-view-six-css {
  background-color: #FBDA41;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.es-flex-text-view-six-css {
  font-size: 40px;
  color: #42b983;
}
</style>
