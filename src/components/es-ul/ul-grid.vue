<template>
  <div class="ul_grid" :clipPadding="false">
    <div class="ul_grid_menus">
      <s-text-button class="ul_grid_menus_btn" text="scrollToIndex-20" @click="scrollToIndexFn"></s-text-button>
      <s-text-button class="ul_grid_menus_btn" text="scrollToPosition-0" @click="scrollToPositionFn"></s-text-button>
      <s-text-button class="ul_grid_menus_btn" text="setInitPosition-1" @click="setInitPositionFn"></s-text-button>
      <s-text-button class="ul_grid_menus_btn" text="scrollToFocused-20" @click="scrollToFocusedFn"></s-text-button>
      <s-text-button class="ul_grid_menus_btn" text="scrollToTop" @click="scrollToTopFn"></s-text-button>
      <s-text-button class="ul_grid_menus_btn" text="requestChildFocus-3" @click="requestChildFocusFn"></s-text-button>
      <s-text-button class="ul_grid_menus_btn" text="hasFocus" @click="hasFocusFn"></s-text-button>
      <s-text-button class="ul_grid_menus_btn" text="getScrollOffset" @click="getScrollOffsetFn"></s-text-button>
      <s-text-button class="ul_grid_menus_btn" text="setItemFocused-4" @click="setItemFocusedFn"></s-text-button>
    </div>
    <div class="ul_grid_ul_box">
      <ul class="ul_grid_ul_el" ref="ulRef" :spanCount="4">
        <template v-for="(item, index) in gridArr" :key="item.id">
          <li v-if="index%spanCount==0" :type="1" class="ul_grid_li_el">
            <div class="ul_grid_li_div" v-for="(divItem, divIndex) in getRows(index)" :key="divItem.id" :focusable="true">
              <img class="ul_grid_img" :duplicateParentState="true" :enableBlackBorder="true" src="https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750" />
              <p class="ul_grid_li_p">{{ divItem.title }}</p>
            </div>
          </li>
        </template>
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
  name: 'ul-grid'
})
const gridArr = ref<any[]>(new Array(50).fill(1).map((item,index)=>{
  return { type: 1, title: `ul-li${index}`, id: `id-${index}` }
}))
const spanCount = 5
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

const getRows = (index:number) => {
  return gridArr.value.slice(index, index+spanCount)
}
defineExpose({
  onESCreate(params) {}
})
</script>

<style scoped>
.ul_grid {
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.8);
}

.ul_grid_menus {
  width: 300px;
  height: 1080px;
  background-color: rgba(0, 0, 0, 0.5);
  border-right: solid 2px #cccccc;
}

.ul_grid_menus_btn {
  margin-bottom: 10px;
}

.ul_grid_ul_box {
  width: 1620px;
  height: 1080px;
  background-color: #cccccc;
  overflow: hidden;
}

.ul_grid_ul_el {
  width: 1620px;
  height: 1080px;
  background-color: transparent;
  overflow-y: scroll;
}

.ul_grid_li_el {
  width: 1620px;
  height: 280px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
}

.ul_grid_li_div {
  position: relative;
  width: 320px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
.ul_grid_img {
  width: 300px;
  height: 260px;
  background-color: transparent;
  border-radius: 8px;
  focus-scale: 1.03;
  focus-border-width: 3px;
  focus-border-color: white;
  focus-border-style: solid;
}
.ul_grid_li_p {
  width: 300px;
  height: 50px;
  position: absolute;
  left: 25px;
  top: 25px;
  color: #ffffff;
  font-size: 30px;
}
</style>
