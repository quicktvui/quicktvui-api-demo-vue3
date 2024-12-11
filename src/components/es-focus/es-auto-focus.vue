<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="inner_div_content">
      <s-text-button text="可获焦1"  />
      <s-text-button text="点击显示v-show的div" @onButtonClicked="onChangeVisibleButtonClick(1)" />
      <s-text-button text="点击visible的div" @onButtonClicked="onChangeVisibleButtonClick(2)" />
      <s-text-button text="点击显示v-if的div" @onButtonClicked="onChangeVisibleButtonClick(3)" />
      <s-text-button text="点击显示v-if的div,取消autofocus,不请求焦点" @onButtonClicked="onChangeVisibleButtonClick(4)" />
    </div>
    <div class="inner_div_content">
      <div class="inner_div_content">
        <s-text-button text="页面首次进入焦点"  :autofocus="true"/>
      </div>
    </div>
    <div>
      <div class="inner_div_content" v-show="vShowVisible">
        <s-text-button text="v-show隐藏的autofocus"  :autofocus="true"/>
      </div>
    </div>
    <div>
      <div class="inner_div_content" :visible="visibleVisible">
        <s-text-button text="visible隐藏的autofocus" :autofocus="true"/>
      </div>
    </div>
    <div>
      <div class="inner_div_content" v-if="vIFVisible">
        <s-text-button text="v-if隐藏的autofocus"  :autofocus="autofocus"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";
import {ref} from "vue";

const TAG = 'LogSamplePage'

export default defineComponent({
  name: '使用初探',
  setup() {
    const log = useESLog()
    const vShowVisible = ref(false)
    const vIFVisible = ref(false)
    const visibleVisible = ref(false)
    const autofocus = ref(false)
    function onChangeVisibleButtonClick(type:number){
      if(type == 1){
        vShowVisible.value = !vShowVisible.value
      }else if(type == 2){
        visibleVisible.value = !visibleVisible.value
      }else if(type == 3){
        autofocus.value = true
        vIFVisible.value = !vIFVisible.value
      }else if(type == 4){
        autofocus.value = false
        vIFVisible.value = !vIFVisible.value
      }

    }

    return {
      onChangeVisibleButtonClick,
      vShowVisible,vIFVisible,visibleVisible,autofocus
    }
  },
});

</script>

<style>
.inner_div_content{
  background-color: blue;
}
</style>
