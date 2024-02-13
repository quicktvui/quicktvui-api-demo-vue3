<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-row>
      <div class="inner_div_content">
        <s-text-button text="可获焦1"  />
        <s-text-button text="点击改变v-show List" @onButtonClicked="onChangeVisibleButtonClick(1)" />
        <s-text-button text="点击改变v-if List" @onButtonClicked="onChangeVisibleButtonClick(2)" />
        <s-text-button text="点击改变scroll List" @onButtonClicked="onChangeVisibleButtonClick(3)" />
        <s-text-button text="点击改变scroll List,不请求焦点" @onButtonClicked="onChangeVisibleButtonClick(4)" />
      </div>
      <div class="inner_div_content">
        <div class="inner_div_content">
          <s-text-button text="首次进入焦点被抢" />
        </div>
      </div>
      <div class="inner_div_content_div">
        <qt-list-view class="inner_div_content_list"
                      v-show="vShowVisible"
                      v-if="vIFVisible"
                      :autofocusPosition="autofocusPosition"
                      ref="listRef">
          <s-text-button-template :type="1" />
        </qt-list-view>
      </div>
    </qt-row>


  </div>
</template>

<script lang="ts">

import {defineComponent, nextTick} from "@vue/runtime-core";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";
import {ref} from "vue";
import QTListView from "../../views/nav/qt-list-view-page.vue";
import {QTIListView, QTListViewItem} from "@quicktvui/quicktvui3";
import STextButtonTemplate from "../text-button/text-button-template.vue";

const TAG = 'LogSamplePage'

export default defineComponent({
  name: '使用初探',
  components: {STextButtonTemplate, QTListView},
  setup() {
    const log = useESLog()
    const vShowVisible = ref(true)
    const vIFVisible = ref(true)
    const visibleVisible = ref(false)
    const autofocus = ref(false)
    const autofocusPosition = ref(-1)
    const listRef = ref<QTIListView>()
    let listReactive : Array<QTListViewItem> | undefined = []
    function onChangeVisibleButtonClick(type:number){
      if(type == 1){
        vShowVisible.value = !vShowVisible.value
      }else if(type == 3){
        //visibleVisible.value = !visibleVisible.value
        autofocusPosition.value = 3
        nextTick(()=>{
          listRef.value?.scrollToPosition(2)
        })
      }else if(type == 2){
        autofocus.value = true
        vIFVisible.value = !vIFVisible.value
        if(vIFVisible.value){
          setupList()
        }
      }else if(type == 4){
        autofocusPosition.value = -1
        nextTick(()=>{
          listRef.value?.scrollToPosition(2)
        })
      }
    }

    setupList()

    function setupList(){
      let list :Array<QTListViewItem> = []
      let i = 0;
      for(i = 0; i < 100;i ++){
        let item : QTListViewItem = {
          type:1,
          _id:`list0-${i}`,
          text:`item-${i}`
        }
        list.push(item)
      }
      nextTick(() => {
        listReactive = listRef?.value?.init(list)
      })
    }

    return {
      onChangeVisibleButtonClick,listReactive,autofocusPosition,
      vShowVisible,vIFVisible,visibleVisible,autofocus,listRef
    }
  },
});

</script>

<style>
.inner_div_content{
  background-color: blue;
}

.inner_div_content_div{
  background-color: red;
  width: 200px;
  height: 800px;
}

.inner_div_content_list{
  background-color: grey;
  width: 200px;
  height: 800px;
}
</style>
