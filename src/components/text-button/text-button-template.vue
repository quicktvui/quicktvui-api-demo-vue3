<template>
  <div class="button-root-css"
       :clipChildren="false"
       :focusable="true"
       :enableFocusBorder="true"
       :focusScale="1.1"
       >
    <qt-text duplicateParentState class="text-root-css"
        text="${text}"
    ></qt-text>
  </div>
</template>

<script>
export default {
  name: 's-text-button-template'
}
</script>

<script setup>
import QTText from "../../views/nav/qt-nav-text-page.vue";

const emit = defineEmits(["onButtonClicked", "onButtonFocused"])
const props = defineProps({
  index: {
    type: Number,
    default: -1
  },
  text: {
    type: String,
    default: ''
  },
})


</script>

<style scoped>

.button-root-css {
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

.text-root-css {
  width: 250px;
  height: 80px;
  font-size: 25px;
  color: #40b883;
  text-align: center;
  text-align-vertical: center;
  focus-color: #fff;
  select-color: red;
}

</style>
