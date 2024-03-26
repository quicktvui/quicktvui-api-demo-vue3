<template>
  <div class="es-sdk-root-css" v-show="vAllShow">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-row>
      <div class="inner_div_content">
        <s-text-button text="可获焦1"  />
        <s-text-button text="点击改变v-show List 0" @onButtonClicked="onChangeVisibleButtonClick(1)" />
        <s-text-button text="点击改变v-if List 0" @onButtonClicked="onChangeVisibleButtonClick(2)" />
        <s-text-button text="点击改变scroll List 0" @onButtonClicked="onChangeVisibleButtonClick(3)" />
        <s-text-button text="点击改变scroll List 0,不请求焦点" @onButtonClicked="onChangeVisibleButtonClick(4)" />
        <s-text-button text="点击改变root v-show" @onButtonClicked="onChangeVisibleButtonClick(5)" />
      </div>
      <div class="inner_div_content">
        <s-text-button text="点击改变v-show List 1" @onButtonClicked="onChangeVisibleButtonClick(6)" />
      </div>
      <div class="inner_div_content_div" v-show="vShowVisible">
        <qt-list-view class="inner_div_content_list"
                      v-if="vIFVisible"
                      :autoscroll="[autofocusPosition,390]"
                      ref="listRef">
<!--          -->
          <s-text-button-template :type="1"/>
        </qt-list-view>
      </div>
      <div class="inner_div_content_div" v-show="vShowVisible2">
        <qt-list-view class="inner_div_content_list"
                      v-if="vIFVisible2"
                      ref="listRef2">
          <s-text-button-template :type="1" autofocus="${autofocus}"/>
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
    const vShowVisible2 = ref(true)
    const vAllShow = ref(true)
    const vIFVisible = ref(true)
    const vIFVisible2 = ref(true)
    const visibleVisible = ref(false)
    const autofocus = ref(false)
    const autofocusPosition = ref(8)
    const listRef = ref<QTIListView>()
    const listRef2 = ref<QTIListView>()
    let listReactive : Array<QTListViewItem> | undefined = []
    function onChangeVisibleButtonClick(type:number){
      if(type == 1){
        vShowVisible.value = !vShowVisible.value
      }else if(type == 3){
        //visibleVisible.value = !visibleVisible.value
        autofocusPosition.value = 96
        // nextTick(()=>{
        //   listRef.value?.scrollToPosition(3)
        // })
      }else if(type == 2){
        autofocus.value = true
        vIFVisible.value = !vIFVisible.value
        if(vIFVisible.value){
          setupList(0)
        }
      }else if(type == 4){
        autofocusPosition.value = -1
        nextTick(()=>{
          listRef.value?.scrollToPosition(3)
        })
      }else if(type == 5){
        vAllShow.value = !vAllShow.value
        setTimeout(()=>{
          vAllShow.value = true
        },2000)
      }else if(type == 6){
        vShowVisible2.value = !vShowVisible2.value
      }
    }

    setupList(0)
    setupList(1)

    function setupList(type:number){
      let list :Array<QTListViewItem> = []
      let i = 0;
      for(i = 0; i < 100;i ++){
        let item : QTListViewItem = {
          type:1,
          sid:`item-${i}`,
          text:`${type}-item-${i}`,
          autofocus:false
        }
        list.push(item)
      }
      //index为5的节点获得自动获得焦点
      list[5].autofocus = true
      nextTick(() => {
        if(type == 0){
          listReactive = listRef?.value?.init(list)
        }else if(type == 1){
          listRef2?.value?.init(list)
        }

      })
    }

    return {
      onChangeVisibleButtonClick,listReactive,autofocusPosition,listRef2,vShowVisible2,
      vShowVisible,vIFVisible,visibleVisible,autofocus,listRef,vAllShow,vIFVisible2
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
