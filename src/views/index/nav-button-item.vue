<template>
  <div class="nav-button-item-root-css"
       layout="${layout}"
       :focusable="true"
       :enableFocusBorder="true"
       :focusScale="1.1"
       eventClick
       eventFocus>
    <text-view
      class="nav-button-item-text-css"
      :duplicateParentState="true"
      :focusable="false"
      :textSize="25"
      :ellipsizeMode="2"
      enablePostTask
      postDelay="200"
      :lines="1"
      gravity="center"
      text="${name}"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'nav-button-item',
  setup(props, context) {
    return {}
  },
});
</script>

<style scoped>

.nav-button-item-root-css {
  border-style: solid;
  border-color: #FFFFFF;
  border-width: 2px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  focus-background-color: #40b883;
}

.nav-button-item-text-css {
  width: 250px;
  height: 80px;
  font-size: 25px;
  color: #424242;
  text-align: center;
  text-align-vertical: center;
  focus-color: #FFFFFF;
}

</style>
