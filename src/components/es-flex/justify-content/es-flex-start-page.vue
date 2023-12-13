<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view text="justify-content：flex-start"></s-text-view>
      <div class="es-flex-justify-content-start-css">
        <es-flex-view-one/>
        <es-flex-view-two/>
        <es-flex-view-three/>
        <es-flex-view-four/>
        <es-flex-view-five/>
      </div>
    </div>
  </div>
</template>

<script>

import ESFlexViewOne from '../view/es-flex-view-one'
import ESFlexViewTwo from '../view/es-flex-view-two'
import ESFlexViewThree from '../view/es-flex-view-three'
import ESFlexViewFour from '../view/es-flex-view-four'
import ESFlexViewFive from '../view/es-flex-view-five'
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'flex-start',
  components: {
    'es-flex-view-one': ESFlexViewOne,
    'es-flex-view-two': ESFlexViewTwo,
    'es-flex-view-three': ESFlexViewThree,
    'es-flex-view-four': ESFlexViewFour,
    'es-flex-view-five': ESFlexViewFive,
  },
  setup() {
    return {}
  },
});

</script>

<style>

.es-flex-justify-content-start-css {
  width: 1000px;
  height: 300px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #40b883;
}
</style>
