<template>
  <div class="es-component-child-css">
    <span>异步加载的ChildA组件</span>
    <img class="es-component-child-img-css" :src="star">
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

import star from '../../assets/star.png'

export default defineComponent({
  name: 'ChildA',
  setup() {
    return {
      star
    }
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

.es-component-child-img-css {
  width: 100px;
  height: 100px;
}
</style>
