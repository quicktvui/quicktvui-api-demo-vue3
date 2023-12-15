<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view text="align-content：space-between"></s-text-view>
      <div class="es-flex-align-content-between-css">
        <es-flex-view-two/>
        <es-flex-view-six/>
        <es-flex-view-two/>
        <es-flex-view-six/>
        <es-flex-view-two/>
        <es-flex-view-six/>
        <es-flex-view-two/>
        <es-flex-view-six/>
        <es-flex-view-two/>
        <es-flex-view-six/>
        <es-flex-view-two/>
        <es-flex-view-six/>
        <es-flex-view-two/>
        <es-flex-view-six/>
      </div>
    </div>
  </div>
</template>

<script>

import ESFlexViewTwo from '../view/es-flex-view-two'
import ESFlexViewSix from '../view/es-flex-view-six'
import {defineComponent} from "@vue/runtime-core";
import ESFlexViewOne from "../view/es-flex-view-one";
import ESFlexViewThree from "../view/es-flex-view-three";
import ESFlexViewFour from "../view/es-flex-view-four";
import ESFlexViewFive from "../view/es-flex-view-five";

export default defineComponent({
  name: 'space-between',
  components: {
    'es-flex-view-one': ESFlexViewOne,
    'es-flex-view-two': ESFlexViewTwo,
    'es-flex-view-three': ESFlexViewThree,
    'es-flex-view-four': ESFlexViewFour,
    'es-flex-view-five': ESFlexViewFive,
    'es-flex-view-six': ESFlexViewSix,
  },
  setup() {
    return {}
  },
});

</script>

<style>

.es-flex-align-content-between-css {
  width: 1000px;
  height: 300px;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: space-between;
  background-color: #40b883;
}
</style>
