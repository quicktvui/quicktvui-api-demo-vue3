<template>
  <div class="es-sdk-root-css" v-show="vAllShow">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-row>
      <div class="inner_div_content">
        <s-text-button text="点击改变v-show List 0" @onButtonClicked="onChangeVisibleButtonClick(1)" />
        <s-text-button text="点击改变List 0 ,重设数据" @onButtonClicked="onChangeVisibleButtonClick(2)" />
        <s-text-button text="点击改变scroll List 0" @onButtonClicked="onChangeVisibleButtonClick(3)" />
        <s-text-button text="点击改变scroll List 0,不请求焦点" @onButtonClicked="onChangeVisibleButtonClick(4)" />

      </div>
      <div class="inner_div_content">
        <s-text-button text="点击改变autoSelectPosition" @onButtonClicked="onChangeVisibleButtonClick(5)" />
        <s-text-button text="点击改变v-show List 1" @onButtonClicked="onChangeVisibleButtonClick(6)" />
        <s-text-button text="点击改变List 1 ,重设数据" @onButtonClicked="onChangeVisibleButtonClick(7)" />
        <s-text-button text="点击改变List 1 v-if 重设数据" @onButtonClicked="onChangeVisibleButtonClick(8)" />
      </div>
      <div class="inner_div_content_div" v-show="vShowVisible">
        <qt-list-view class="inner_div_content_list"
                      sid="level1"
                      v-if="vIFVisible"
                      :enableSelectOnFocus="false"
                      nextFocusRightSID="level2"
                      :autoscroll="[firstLevelScroll,390]"
                      :singleSelectPosition="firstLevelSelect"
                      @item-focused="onItemFocusedLevel1"
                      ref="listRef">
<!--          -->
<!--          :initPosition="initPosition"-->
          <s-text-button-template :type="1" eventFocus/>
        </qt-list-view>
      </div>
      <div class="inner_div_content_div" v-show="vShowVisible2">
        <qt-list-view class="inner_div_content_list"
                      sid="level2"
                      nextFocusLeftSID="level1"
                      :enableSelectOnFocus="false"
                      @item-focused="onItemFocusedLevel2"
                      v-if="vIFVisible2"
                      :autofocusPosition="autofocusPosition"
                      :autoscroll="[secondLevelScroll,390]"
                      :singleSelectPosition="secondLevelSelect"
                      ref="listRef2">
          <s-text-button-template :type="2" autofocus="${autofocus}" eventFocus/>
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
    //一级滚动定位位置
    const firstLevelScroll = ref(8)
    //二级滚动定位位置
    const secondLevelScroll = ref(-1)
    //一级选中位置
    const firstLevelSelect = ref(8)
    const secondLevelSelect = ref(250)

    const autofocusPosition = ref(240)
    const autoScrollPosition = ref(8)

    const scrollOffset = ref(0)
    const autoSelectPosition = ref(9)
    let times = 0

    let pageSize = 30

    let firstLevelCount = 20;


    //let currentLevel1 = -1;

    const initPosition = ref({
      scrollToPosition:7,
      focusPosition:7,
      alignCenter:true,
    })
    const initPosition2 = ref({
      scrollToPosition:8,
    })
    const listRef = ref<QTIListView>()
    const listRef2 = ref<QTIListView>()
    let listReactive : Array<QTListViewItem> | undefined = []

    function onItemFocusedLevel2(e){
      if(e.isFocused){
        let pos = e.position
        let levelPos = Math.floor(pos / pageSize)
        secondLevelScroll.value = pos
        log.e('ZHAO','onItemFocused2 pos:'+pos+",levelPos:"+levelPos)
        firstLevelScroll.value = levelPos
        firstLevelSelect.value = levelPos
      }
    }

    function onItemFocusedLevel1(e){

      if(e.isFocused){
        let pos = e.position
        // let randomNum = Math.floor(Math.random() * 80);
        //console.log(randomNum);
        //打开列表定位的位置
        // autofocusPosition.value = pos

        firstLevelSelect.value = pos
        //一级定位的问题
        firstLevelScroll.value = pos
        //二级定位的位置
        let level2ToFirst = pos * pageSize
        let level2ToLast = level2ToFirst + pageSize -1 ;
        log.e('ZHAO','1 onItemFocused pos:'+pos+",level2ToFirst:"+level2ToFirst+",level2ToLast:"+level2ToLast+",secondLevelScroll:"+secondLevelScroll.value)
        if(secondLevelScroll.value > level2ToLast || secondLevelScroll.value < level2ToFirst){
            //如果当前列表已经在当前分类下，则不需要再滚动列表
          secondLevelScroll.value = level2ToFirst
        }
        log.e('ZHAO','2 onItemFocused pos:'+pos+",firstLevelSelect:"+firstLevelScroll.value+",secondLevelScroll:"+secondLevelScroll.value)
      }
      // autofocusPosition.value =
    }
    function onChangeVisibleButtonClick(type:number){
      if(type == 1){
        // if(vShowVisible.value){
        //   // firstLevelScroll.value = -1
        // }
        if(!vShowVisible.value){
          firstLevelScroll.value = 13
        }
        vShowVisible.value = !vShowVisible.value
      }else if(type == 2){
        setupFirstLevel()
        firstLevelScroll.value = 8
      }else if(type == 3){
        initPosition.value.scrollToPosition = 16
        initPosition.value.focusPosition = 16
      }else if(type == 2){
        autofocus.value = true
        vIFVisible.value = !vIFVisible.value
        if(vIFVisible.value){
          setupFirstLevel()
        }
      }else if(type == 4){
        autofocusPosition.value = -1
        nextTick(()=>{
          listRef.value?.scrollToPosition(2)
        })
      }else if(type == 5){
        let randomNum = Math.floor(Math.random() * 80);
        //console.log(randomNum);
        autoSelectPosition.value = randomNum
      }else if(type == 6){
        vShowVisible2.value = !vShowVisible2.value
      }else if(type == 7){
        setupSecondLevel()
      }else if(type == 8){
        vIFVisible2.value = !vIFVisible2.value
        nextTick(() => {
          if(listRef2){
            setupSecondLevel()
          }
        })

      }
    }

    setupFirstLevel()
    setupSecondLevel()

    function  setupSecondLevel(){
      // listRef2?.value?.init([])
      times
      let list :Array<QTListViewItem> = []
      let i = 0;
      let levelCount = pageSize * firstLevelCount;
      for(i = 0; i < levelCount;i ++){
        let item : QTListViewItem = {
          type:2,
          sid:`item-${i}`,
          text:`二级--${i}-${times}`,
          autofocus:false
        }
        list.push(item)
      }
      setTimeout(()=>{
        nextTick(() => {
          listRef2?.value?.init(list)
        })
      },300)
      times++

    }

    function setupFirstLevel(){
      let list :Array<QTListViewItem> = []
      let i = 0;
      for(i = 0; i < firstLevelCount;i ++){
        let item : QTListViewItem = {
          type:1,
          sid:`item-${i}`,
          text:`一级--${i}`,
          autofocus:false
        }
        list.push(item)
      }
      times++
      nextTick(() => {
          listReactive = listRef?.value?.init(list)
      })
    }

    return {
      onChangeVisibleButtonClick,listReactive,autofocusPosition,listRef2,vShowVisible2,initPosition,initPosition2,
      vShowVisible,vIFVisible,visibleVisible,autofocus,listRef,vAllShow,vIFVisible2,scrollOffset,autoSelectPosition,
      onItemFocusedLevel1,onItemFocusedLevel2,autoScrollPosition,firstLevelScroll, secondLevelScroll,
      firstLevelSelect,secondLevelSelect
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
