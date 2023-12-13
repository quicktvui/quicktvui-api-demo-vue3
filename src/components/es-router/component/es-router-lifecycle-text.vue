<template>
  <s-text-view :text="textRef" style="background-color: transparent"/>
</template>

<script>

import {defineComponent, ref} from "@vue/runtime-core";

export default defineComponent({
  setup() {
    const textRef = ref("")

    function appendLifecycle(text) {
      textRef.value = textRef.value + ' --> ' + text
    }

    return {
      textRef,
      appendLifecycle
    }
  },
});

</script>

<style scoped>
</style>
