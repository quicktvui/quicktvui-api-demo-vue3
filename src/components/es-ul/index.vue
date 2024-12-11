<template>
  <div class="ul_page" :clipPadding="false">
    <div class="menus">
      <s-text-button class="menus_btn" text="scrollToIndex-20" @click="scrollToIndexFn"></s-text-button>
      <s-text-button class="menus_btn" text="scrollToPosition-0" @click="scrollToPositionFn"></s-text-button>
      <s-text-button class="menus_btn" text="setInitPosition-1" @click="setInitPositionFn"></s-text-button>
      <s-text-button class="menus_btn" text="scrollToFocused-20" @click="scrollToFocusedFn"></s-text-button>
      <s-text-button class="menus_btn" text="scrollToTop" @click="scrollToTopFn"></s-text-button>
      <s-text-button class="menus_btn" text="requestChildFocus-3" @click="requestChildFocusFn"></s-text-button>
      <s-text-button class="menus_btn" text="hasFocus" @click="hasFocusFn"></s-text-button>
      <s-text-button class="menus_btn" text="getScrollOffset" @click="getScrollOffsetFn"></s-text-button>
      <s-text-button class="menus_btn" text="setItemFocused-4" @click="setItemFocusedFn"></s-text-button>
    </div>
    <div class="ul_box">
      <ul class="ul_el" ref="ulRef">
        <li v-for="(item, index) in arr" :key="index" :type="1" class="li_el">
          <div class="li_div" :focusable="true" @click="blockRootFocusFn(index)">
            <p class="li_p">{{ item.title }}</p>
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
  name: 'ul-Horizontal'
})
const arr = ref<any[]>(new Array(50).fill(1).map((item,index)=>{
  let title = `ul-li${index}`
  if(index === 0){
    title = '锁住/放开 当前列表所有方向的焦点'
  }
  if(index === 2){
    title = '锁住当前列表左方向的焦点'
  }
  if(index === 3){
    title = '锁住当前列表左方向的焦点'
  }
  return { type: 1, title }
}))
const ulRef = ref<HippyListElement>()
const toast = useESToast()

const scrollToIndexFn = () => {
  ulRef.value?.scrollToIndex(0, 20, true)
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
let isLock = false
const blockRootFocusFn = (index) => {
  if(index === 0){
    if(isLock){
      ulRef.value?.unBlockRootFocus()
      isLock = false
      toast.showLongToast('un lock')
    }else{
      ulRef.value?.blockRootFocus()
      isLock = true
      toast.showLongToast('lock')
    }
  }
  if(index === 2){
    ulRef.value?.setBlockFocusDirectionsOnFail(['left'])
    toast.showLongToast('lock left')
  }
  if(index === 3){
    ulRef.value?.setBlockFocusDirectionsOnFail([])
    toast.showLongToast('un lock left')
  }
}

defineExpose({
  onESCreate(params) {}
})
</script>

<style scoped>
.ul_page {
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.8);
}

.menus {
  width: 300px;
  height: 1080px;
  background-color: rgba(0, 0, 0, 0.5);
  border-right: solid 2px #cccccc;
}

.menus_btn {
  margin-bottom: 10px;
}

.ul_box {
  width: 1620px;
  height: 1080px;
  background-color: #cccccc;
  overflow: hidden;
}

.ul_el {
  width: 1620px;
  height: 1080px;
  background-color: transparent;
  overflow-y: scroll;
}

.li_el {
  width: 1620px;
  height: 100px;
  background-color: transparent;
  margin-bottom: 20px;
}

.li_div {
  width: 1620px;
  height: 80px;
  background-color: #ffffff;
  focus-background-color: pink;
}

.li_p {
  width: 1620px;
  height: 50px;
  line-height: 50px;
  font-size: 25px;
  text-align: center;
}
</style>
