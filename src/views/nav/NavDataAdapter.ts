import {
  QTWaterfall,
  QTWaterfallItem,
  QTWaterfallSection,
  QTWaterfallSectionType
} from "@quicktvui/quicktvui3";
import ESModulePageList from "../../components/es-module";
import {QTComponentNavPageList, QTFrameworkNavPageList, QTPlayerNavPageList} from './index'

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
      top: 100,
      left: 90,
      right: 90,
    },
  }
  return section
}

function buildComponentItemList(): Array<QTWaterfallItem> {
  const itemList: Array<QTWaterfallItem> = []
  const qtComponentItemList = Object.keys(QTComponentNavPageList).map(key => ({
    _id: key,
    name: QTComponentNavPageList[key].name,
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
  itemList.push(...qtComponentItemList)
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
  const itemList: Array<QTWaterfallItem> = []
  const moduleItemList = Object.keys(ESModulePageList).map(key => ({
    _id: key,
    name: ESModulePageList[key].name,
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
  itemList.push(...moduleItemList)

  const playerItemList = Object.keys(QTPlayerNavPageList).map(key => ({
    _id: key,
    name: QTPlayerNavPageList[key].name,
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
  itemList.push(...playerItemList)
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
      bottom: 90
    },
  }
  return section
}

function buildFrameworkItemList(): Array<QTWaterfallItem> {
  const itemList = Object.keys(QTFrameworkNavPageList).map(key => ({
    _id: key,
    name: QTFrameworkNavPageList[key].name,
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
