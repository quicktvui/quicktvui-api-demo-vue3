import {
  QTWaterfall,
  QTWaterfallItem,
  QTWaterfallSection,
  QTWaterfallSectionType
} from "@quicktvui/quicktvui3";
import ESModulePageList from "../../components/es-module";
import QTAPINavPageList from "./index";

export function buildNavWaterfall(): QTWaterfall {
  let waterfall: QTWaterfall = {
    width: 1920,
    height: 1080
  }
  return waterfall
}

export function buildNavSectionList(): Array<QTWaterfallSection> {
  let sectionList: Array<QTWaterfallSection> = []
  sectionList.push(buildComponentSection())
  sectionList.push(buildModuleSection())
  sectionList.push(buildFrameworkSection())
  return sectionList
}

//------------------------------------------------------------------
function buildComponentSection(): QTWaterfallSection {
  let section: QTWaterfallSection = {
    _id: '1',
    type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
    title: '组件',
    titleStyle: {
      width: 1740,
      height: 60,
      marginTop: 40,
      marginBottom: 40,
    },
    itemList: buildComponentItemList(),
    style: {
      width: 1740,
      height: -1,
    },
    decoration: {
      left: 90,
      right: 90,
    },
  }
  return section
}

function buildComponentItemList(): Array<QTWaterfallItem> {
  console.log('------------buildComponentItemList----start--------->>>>', QTAPINavPageList)
  const itemList = Object.keys(QTAPINavPageList).map(data => ({
    id: data,
    name: QTAPINavPageList[data].name,
    style: {
      width: 250,
      height: 80
    },
    decoration: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
    type: 1
  }))
  console.log('------------buildComponentItemList-----end-------->>>>', itemList)
  return itemList
}


//------------------------------------------------------------------
function buildModuleSection(): QTWaterfallSection {
  let section: QTWaterfallSection = {
    _id: '2',
    type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
    title: '模块',
    titleStyle: {
      width: 1740,
      height: 60,
      marginTop: 40,
      marginBottom: 40,
    },
    itemList: buildModuleItemList(),
    style: {
      width: 1740,
      height: -1,
    },
    decoration: {
      left: 90,
      right: 90,
    },
  }
  return section
}

function buildModuleItemList(): Array<QTWaterfallItem> {
  const itemList = Object.keys(ESModulePageList).map(data => ({
    id: data,
    name: ESModulePageList[data].name,
    style: {
      width: 250,
      height: 80
    },
    decoration: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
    type: 1
  }))
  return itemList
}

//------------------------------------------------------------------
function buildFrameworkSection(): QTWaterfallSection {
  let section: QTWaterfallSection = {
    _id: '3',
    type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
    title: '框架',
    titleStyle: {
      width: 1740,
      height: 60,
      marginTop: 40,
      marginBottom: 40,
    },
    itemList: buildFrameworkItemList(),
    style: {
      width: 1740,
      height: -1,
    },
    decoration: {
      left: 90,
      right: 90,
    },
  }
  return section
}

function buildFrameworkItemList(): Array<QTWaterfallItem> {
  console.log('------------buildFrameworkItemList-------start------>>>>', QTAPINavPageList)
  const itemList = Object.keys(QTAPINavPageList).map(data => ({
    id: data,
    name: QTAPINavPageList[data].name,
    style: {
      width: 250,
      height: 80
    },
    decoration: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
    type: 1
  }))
  console.log('------------buildFrameworkItemList-------end------>>>>', itemList)
  return itemList
}
