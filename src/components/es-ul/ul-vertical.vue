<template>
  <div class="ul_vertical_page" :clipPadding="false">
    <div class="ul_vertical_menus">
      <s-text-button text="scrollToIndex-20" @click="scrollToIndexFn"></s-text-button>
      <s-text-button text="scrollToPosition-0" @click="scrollToPositionFn"></s-text-button>
      <s-text-button text="setInitPosition-1" @click="setInitPositionFn"></s-text-button>
      <s-text-button text="scrollToFocused-20" @click="scrollToFocusedFn"></s-text-button>
      <s-text-button text="scrollToTop" @click="scrollToTopFn"></s-text-button>
      <s-text-button text="requestChildFocus-3" @click="requestChildFocusFn"></s-text-button>
      <s-text-button text="hasFocus" @click="hasFocusFn"></s-text-button>
      <s-text-button text="getScrollOffset" @click="getScrollOffsetFn"></s-text-button>
      <s-text-button text="setItemFocused-4" @click="setItemFocusedFn"></s-text-button>
    </div>
    <div class="ul_vertical_box">
      <ul class="ul_vertical_el" ref="ulRef" horizontal>
        <li v-for="(item, index) in arr" :key="index" :type="1" class="li_vertical_el">
          <div class="li_vertical_div" :focusable="true" :enableBlackBorder="true">
            <img class="li_vertical_img" :duplicateParentState="true" :enableBlackBorder="true" src="https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750" />
            <p class="li_vertical_p">{{ item.title }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useESToast } from "@extscreen/es3-core";
// import { HippyListElement } from '@extscreen/es3-vue'
import { HippyListElement } from '../../../packages/ESVue/src/runtime/element/hippy-list-element'
defineOptions({
  name: 'ul-vertical'
})
const arr = ref<any[]>(new Array(50).fill(1).map((item,index)=>{
  return { type: 1, title: `ul-li${index}` }
}))
const ulRef = ref<HippyListElement>()
const toast = useESToast()

const scrollToIndexFn = () => {
  ulRef.value?.scrollToIndex(20, 20, true)
  toast.showLongToast('20, 0, true')
}
const scrollToPositionFn = () => {
  ulRef.value?.scrollToPosition(0, 0, true)
}
const setInitPositionFn = () => {
  ulRef.value?.setInitPosition({
    focusPosition: 1,
    scrollToPosition:1,
    scrollOffset:0,
    force:true
  })
}
const scrollToFocusedFn = () => {
  ulRef.value?.scrollToFocused(20)
}
const scrollToTopFn = () => {
  ulRef.value?.scrollToTop()
}
const requestChildFocusFn = () => {
  ulRef.value?.requestChildFocus(3)
}

const hasFocusFn = async () => {
  const res = await ulRef.value?.hasFocus()
  toast.showLongToast(res+'')
}
const getScrollOffsetFn = async ()=> {
  const res = await ulRef.value?.getScrollOffset()
  if(res){
    toast.showLongToast(`x: ${res.x}; y: ${res.y}`)
  }
}
const setItemFocusedFn = () => {
  ulRef.value?.setItemFocused(4)
}
defineExpose({
  onESCreate(params) {}
})
</script>

<style scoped>
.ul_page2 {
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
}

.ul_vertical_menus {
  width: 1920px;
  height: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.5);
  border-right: solid 2px #cccccc;
}

.ul_vertical_box {
  width: 1920px;
  height: 300px;
  background-color: #cccccc;
  overflow: hidden;
}

.ul_vertical_el {
  width: 1920px;
  height: 300px;
  background-color: transparent;
  overflow-y: scroll;
}

.li_vertical_el {
  width: 350px;
  height: 300px;
  background-color: transparent;
  margin-right: 20px;
}

.li_vertical_div {
  position: relative;
  width: 350px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.li_vertical_img {
  width: 300px;
  height: 260px;
  background-color: transparent;
  border-radius: 8px;
  focus-scale: 1.03;
  focus-border-width: 3px;
  focus-border-color: white;
  focus-border-style: solid;
}
.li_vertical_p{
  width: 300px;
  height: 50px;
  position: absolute;
  left: 25px;
  top: 25px;
  color: #ffffff;
  font-size: 30px;
}
</style>
