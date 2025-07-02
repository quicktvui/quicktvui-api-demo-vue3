<template>
  <qt-tabs ref="tabRef" class="qt-tabs-css"
           tab-class="qt-tabs"
           tab-nav-bar-class="qt-nav-bar-css-my"
           tab-page-class="qt-tabs-waterfall-css-my"
            :tabs="tabDatas">
    <template #waterfall-item>
      <qt-poster :type="2" />
    </template>
    <template #waterfall-list-item>
      <qt-poster :type="2" />
    </template>
  </qt-tabs>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import {
  QTIImage,
  QTPoster, QTTabItem, QTTabItemType,
  qtTabsRef,
  QTWaterfallSection,
  QTWaterfallSectionType
} from '@quicktvui/quicktvui3'
import {QTPosterImage} from "@quicktvui/quicktvui3/dist/src/poster/core/QTPosterImage";

const tabDatas = qtTabsRef()

onMounted(() => {
  tabDatas.value = mockNavData() //初始化数据
})

// 模拟创建poster
const createPosterItem = (index: number): QTPoster => {
  const isLarge = index < 2;
  const baseIndex = index;
  const style = isLarge
    ? { width: 852, height: 356 }
    : { width: 408, height: 230 };
  const imageSrc = isLarge
    ? 'https://inews.gtimg.com/om_bt/O98tXzU2bQgRJ5nRiiJQx_6uwzkB_rsF9e6TA7kcXr058AA/1000'
    : 'https://img2.baidu.com/it/u=3693067398,2696388876&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500';

  return {
    type: 2,
    style,
    decoration: isLarge
      ? index === 1 ? { left: 36 } : undefined
      : { left: index  === 2 ? 0 : 36, top: 36 },
    image: {
      style,
      src: imageSrc,
    } as QTPosterImage,
    ...(isLarge
      ? {
        focusTitle: {
          text: `item${index}`,
          enable: true,
        },
      }
      : {
        title: {
          text: `item${index}`,
          enable: true,
        },
      }),
  };
};
//创建flex版块
const createFlexSection = (tabIndex: number, sectionIndex: number): QTWaterfallSection => {
  const items: QTPoster[] = Array.from({ length: 6 }, (_, i) =>
    createPosterItem(i)
  );

  return {
    _id: `section-id${tabIndex}${sectionIndex}`,
    type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
    title: `第${tabIndex}页第${sectionIndex}个版块`,
    titleStyle: { width: 1740, height: 60 },
    style: { width: 1740, height: 632 },
    decoration: { left: 90, right: 90, top: 60 },
    itemList: items,
  };
};

//创建列表版块
const createListSection = (tabIndex: number, sectionIndex: number): QTWaterfallSection => {
  const items: QTPoster[] = Array.from({ length: 6 }, (_, i) =>
    createPosterItem(i)
  );

  return {
    _id: `section-id${tabIndex}${sectionIndex}`,
    type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_LIST,
    title: `第${tabIndex}页第${sectionIndex}个版块`,
    titleStyle: { width: 1740, height: 60 },
    style: { width: 1740, height: 390 },
    decoration: { left: 90, right: 90, top: 60 },
    itemList: items,
  };
};

const createTab = (tabIndex: number): QTTabItem => {
  const sections = Array.from({ length: 5 }, (_, sectionIndex) =>
     sectionIndex %2 === 0 ?  createFlexSection(tabIndex, sectionIndex) :
       createListSection(tabIndex, sectionIndex)
  );
  let end = {
    style: { width: 1740, height: 200},
    type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_END,
    itemList:[]
  } as QTWaterfallSection

  return {
    _id: `001${tabIndex}`,
    type: QTTabItemType.QT_TAB_ITEM_TYPE_DEFAULT,
    text: `Tab${tabIndex}`,
    titleSize: 20,
    content: [...sections,end],
  };
};

const mockNavData = (): QTTabItem[] => {
  return Array.from({ length: 10 }, (_, tabIndex) => createTab(tabIndex));
};
</script>
<style >
.qt-tabs-css {
  width: 1920px;
  height: 1080px;
}

.qt-tabs{
  width: 1920px;
  height: 1080px;
  margin-top: 0px;
}

.qt-nav-bar-css-my{
  top: 30px;
  width:500px;
  align-self: center;
}

.qt-tabs-waterfall-css-my{
  width: 1920px;
  height:1080px;
  background-color: transparent;
}
</style>
