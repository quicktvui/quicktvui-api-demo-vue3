<template>
  <div class="nav-button-root-css"
       layout="${layout}"
       :focusable="true"
       :enableFocusBorder="true"
       :focusScale="1.1"
       eventClick
       eventFocus>
    <text-view
      class="test_text_view_css"
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

.nav-button-root-css {
  width: 250px;
  height: 80px;
  margin: 20px;
  border-style: solid;
  border-color: #40b883;
  border-width: 2px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  focus-background-color: #40b883;
}

.test_text_view_css {
  width: 250px;
  height: 80px;
  font-size: 25px;
  color: #40b883;
  text-align: center;
  text-align-vertical: center;
  focus-color: #fff;
}

</style>
