<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view text="flex-wrap：nowrap"></s-text-view>
      <div class="es-flex-no-wrap-css">
        <es-flex-view-one/>
        <es-flex-view-two/>
        <es-flex-view-three/>
        <es-flex-view-four/>
        <es-flex-view-five/>
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
  name: 'nowrap',
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


.es-flex-no-wrap-css {
  width: 900px;
  height: 300px;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #40b883;
}
</style>
