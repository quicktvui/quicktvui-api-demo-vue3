import {
  QTWaterfall,
  QTWaterfallItem,
  QTWaterfallSection,
  QTWaterfallSectionType
} from "@quicktvui/quicktvui3";

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
      width: 1920,
      height: 60,
      marginLeft: 90,
      marginTop: 40,
      marginBottom: 40,
    },
    itemList: [],
    style: {
      width: 1920,
      height: -1,
    }
  }
  return section
}

//------------------------------------------------------------------
function buildModuleSection(): QTWaterfallSection {
  let section: QTWaterfallSection = {
    _id: '2',
    type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
    title: '模块',
    titleStyle: {
      width: 1920,
      height: 60,
      marginLeft: 90,
      marginTop: 40,
      marginBottom: 40,
    },
    itemList: [],
    style: {
      width: 1920,
      height: -1,
    }
  }
  return section
}

function buildModuleItemList(object: Object): Array<QTWaterfallItem> {
  let itemList: Array<QTWaterfallItem> = []

  return itemList
}

function buildModuleItem(object: Object): Array<QTWaterfallItem> {
  let itemList: Array<QTWaterfallItem> = []

  return itemList
}

//------------------------------------------------------------------
function buildFrameworkSection(): QTWaterfallSection {
  let section: QTWaterfallSection = {
    _id: '3',
    type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
    title: '框架',
    titleStyle: {
      width: 1920,
      height: 60,
      marginLeft: 90,
      marginTop: 40,
      marginBottom: 40,
    },
    itemList: [],
    style: {
      width: 1920,
      height: -1,
    }
  }
  return section
}
