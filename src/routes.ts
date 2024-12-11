import index from "./views/index/index.vue";
import error from "./views/error/index.vue";
import splash from "./views/splash/index.vue";
//
import ESRouterESList from "./components/es-router/es";
import ESNativeRouterPageList from "./components/es-router/native";
import ESFlexDirectionPageList from "./components/es-flex/direction";
import ESFlexWrapPageList from "./components/es-flex/wrap";
import ESFlexJustifyContentPageList from "./components/es-flex/justify-content";
import ESFlexAlignItemsPageList from "./components/es-flex/align-items";
import ESFlexAlignContentPageList from "./components/es-flex/align-content";
import ESPageLifecycleList from "./components/es-lifecycle";
import ESPageDialogList from "./components/es-dialog";
import ESModulePageList from "./components/es-module";
import ESLogPageList from "./components/es-log";
import ESXLogPageList from "./components/es-xlog";
import ESKeyPageList from "./components/es-key";
import ESNetworkPageList from "./components/es-network";
import ESVideoPlayerPageList from "./components/es-video-player";
import ESPlayerManagerPageList from "./components/es-player-manager";
import ESADPlayerPageList from "./components/es-ad-player";
import ESAudioPlayerPageList from "./components/es-audio-player";
import ESAudioServicePlayerPageList from "./components/es-audio-service-player";
import ESSoundPoolPlayerPageList from "./components/es-sound-pool-player"
import ESEventBusPageList from "./components/es-eventbus"
import EsUlList from "./components/es-ul"
import ESComponentPageList from "./components/es-component"
import ESUtilsPageList from "./components/es-utils"
import ESSlotPageList from "./components/es-slot"
//#################################### JSView ####################################################
import es_slot_back from "./components/es-slot/es-slot-back.vue"
import es_slot_event from "./components/es-slot/es-slot-event.vue"
import es_slot_key from "./components/es-slot/es-slot-key.vue"
import es_slot_lifecycle from "./components/es-slot/es-slot-lifecycle.vue"
import es_slot_module_device from "./components/es-slot/es-slot-module-device.vue"
import es_slot_suspend from "./components/es-slot/es-slot-suspend.vue"
//##################################### JSView ###################################################

//----------------------------------------------------------------------------------
import QTButtonPageList from "./components/qt-button"
import QTGridViewPageList from "./components/qt-grid-view"
import QTListViewPageList from "./components/qt-list-view"
import QTPosterPageList from "./components/qt-poster"
import QTNavBarPageList from "./components/qt-nav-bar"
import QTRowPageList from "./components/qt-row"
import QTColumnPageList from "./components/qt-column"
import QTViewPageList from "./components/qt-view"
import QTTextPageList from "./components/qt-text"
import QTImagePageList from "./components/qt-image"
import TextViewPageList from "./components/text-view"
import QTLoadingPageList from "./components/qt-loading"
import QTAnimationPageList from "./components/qt-animation"
import QTWebViewComponentList from "./components/qt-web-view"
import QTX5WebViewComponentList from "./components/qt-x5web-view"
import QTQRCodePageList from "./components/qt-qr-code"
import QTProgressBarPageList from "./components/qt-progress-bar"
import QTSeekBarPageList from "./components/qt-seek-bar"
import QTSelectSeriesPageList from "./components/qt-select-series"
import QTCollapsePageList from "./components/qt-collapse";
import QTScrollViewPageList from "./components/qt-scroll-view";
import QTAppIconPageList from "./components/qt-app-icon";
import QTPluginViewPageList from "./components/qt-plugin-view";
import QTAPIPageList from "./components/qt-api";
import QTSwiperPageList from "./components/qt-swiper";
import QTLottiePageList from "./components/qt-lottie";
import QTIndicatorPageList from "./components/qt-indicator-list-view";

import {
  QTWaterfallPageList,
  QTWaterfallItemPageList,
  QTWaterfallSectionPageList
} from "./components/qt-waterfall";
import {
  QTTabsWaterfallPageList,
  QTTabsWaterfallSectionPageList,
  QTTabsWaterfallItemPageList,
  QTTabsWaterfallSamplePageList,
} from "./components/qt-tabs-waterfall";
import QTClassifiedListViewPageList from "./components/qt-classified-list-view"

import {
  QTTabsWaterfallDataBindingPageList,
  QTTabsWaterfallDataBindingSectionPageList,
  QTTabsWaterfallDataBindingItemPageList,
  QTTabsWaterfallDataBindingSamplePageList,
} from "./components/qt-tabs-data-binding";

import QtModulePageList from "./components/qt-module";

//-------------------------------------------------------------------

import {
  QTComponentNavPageList,
  QTFrameworkNavPageList,
} from './views/nav/index'
//-------------------------------------------------------------------

const routes = [
  {
    path: '/splash',
    name: 'splash',
    component: splash,
    launchMode: 'standard',
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    launchMode: 'clearTask',
  },
  {
    path: '/error',
    name: 'error',
    component: error,
    launchMode: 'standard',
  },
  ...Object.keys(QTComponentNavPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTComponentNavPageList[item].component,
    })),
  ...Object.keys(QTFrameworkNavPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTFrameworkNavPageList[item].component,
    })),
  //############################# JSView路由 ###########################################
  {
    path: '/slot_back',
    name: 'slot_back',
    component: es_slot_back,
  },
  {
    path: '/slot_event',
    name: 'slot_event',
    component: es_slot_event,
  },
  {
    path: '/slot_key',
    name: 'slot_key',
    component: es_slot_key,
  },
  {
    path: '/slot_lifecycle',
    name: 'slot_lifecycle',
    component: es_slot_lifecycle,
  },
  {
    path: '/slot_module_device',
    name: 'slot_module_device',
    component: es_slot_module_device,
  },
  {
    path: '/slot_suspend',
    name: 'slot_suspend',
    component: es_slot_suspend,
    props: {
      suspend: false
    }
  },
  //################################ JSView路由 ########################################
  ...Object.keys(ESRouterESList)
    .map(item => ({
      path: `/router/${item}`,
      name: `router/${item}`,
      component: ESRouterESList[item].component,
      type: ESRouterESList[item].type,
      launchMode: ESRouterESList[item].launchMode,
    })),
  ...Object.keys(ESNativeRouterPageList)
    .map(item => ({
      path: `/router/${item}`,
      name: `router/${item}`,
      component: ESNativeRouterPageList[item].component,
    })),
  ...Object.keys(ESFlexDirectionPageList)
    .map(item => ({
      path: `/flex/${item}`,
      name: `flex/${item}`,
      component: ESFlexDirectionPageList[item].component,
    })),
  ...Object.keys(ESFlexWrapPageList)
    .map(item => ({
      path: `/flex/${item}`,
      name: `flex/${item}`,
      component: ESFlexWrapPageList[item].component,
    })),
  ...Object.keys(ESFlexJustifyContentPageList)
    .map(item => ({
      path: `/flex/${item}`,
      name: `flex/${item}`,
      component: ESFlexJustifyContentPageList[item].component,
    })),
  ...Object.keys(ESFlexAlignItemsPageList)
    .map(item => ({
      path: `/flex/${item}`,
      name: `flex/${item}`,
      component: ESFlexAlignItemsPageList[item].component,
    })),
  ...Object.keys(ESFlexAlignContentPageList)
    .map(item => ({
      path: `/flex/${item}`,
      name: `flex/${item}`,
      component: ESFlexAlignContentPageList[item].component,
    })),
  ...Object.keys(ESPageLifecycleList)
    .map(item => ({
      path: `/lifecycle/${item}`,
      name: `lifecycle/${item}`,
      component: ESPageLifecycleList[item].component,
    })),
  ...Object.keys(ESPageDialogList)
    .map(item => ({
      path: `/dialog/${item}`,
      name: `dialog/${item}`,
      component: ESPageDialogList[item].component,
      type: ESPageDialogList[item].type,
    })),
  ...Object.keys(ESModulePageList)
    .map(item => ({
      path: `/module/${item}`,
      name: `module/${item}`,
      component: ESModulePageList[item].component,
    })),
  ...Object.keys(QtModulePageList)
    .map(item => ({
      path: `/module/${item}`,
      name: `module/${item}`,
      component: QtModulePageList[item].component,
    })),
  ...Object.keys(ESComponentPageList)
    .map(item => ({
      path: `/component/${item}`,
      name: `component/${item}`,
      component: ESComponentPageList[item].component,
    })),
  ...Object.keys(ESLogPageList)
    .map(item => ({
      path: `/log/${item}`,
      name: `log/${item}`,
      component: ESLogPageList[item].component,
    })),
  ...Object.keys(ESXLogPageList)
    .map(item => ({
      path: `/xlog/${item}`,
      name: `xlog/${item}`,
      component: ESXLogPageList[item].component,
    })),
  ...Object.keys(ESKeyPageList)
    .map(item => ({
      path: `/key/${item}`,
      name: `key/${item}`,
      component: ESKeyPageList[item].component,
    })),
  ...Object.keys(ESNetworkPageList)
    .map(item => ({
      path: `/network/${item}`,
      name: `network/${item}`,
      component: ESNetworkPageList[item].component,
    })),
  ...Object.keys(ESVideoPlayerPageList)
    .map(item => ({
      path: `/video/${item}`,
      name: `video/${item}`,
      component: ESVideoPlayerPageList[item].component,
    })),
  ...Object.keys(ESAudioPlayerPageList)
    .map(item => ({
      path: `/audio/${item}`,
      name: `audio/${item}`,
      component: ESAudioPlayerPageList[item].component,
    })),
  ...Object.keys(ESAudioServicePlayerPageList)
    .map(item => ({
      path: `/audio-service/${item}`,
      name: `audio-service/${item}`,
      component: ESAudioServicePlayerPageList[item].component,
    })),
  ...Object.keys(ESSoundPoolPlayerPageList)
    .map(item => ({
      path: `/sound-pool/${item}`,
      name: `sound-pool/${item}`,
      component: ESSoundPoolPlayerPageList[item].component,
    })),
  ...Object.keys(ESADPlayerPageList)
    .map(item => ({
      path: `/ad/${item}`,
      name: `ad/${item}`,
      component: ESADPlayerPageList[item].component,
    })),
  ...Object.keys(ESPlayerManagerPageList)
    .map(item => ({
      path: `/player-manager/${item}`,
      name: `player-manager/${item}`,
      component: ESPlayerManagerPageList[item].component,
    })),
  ...Object.keys(ESEventBusPageList)
    .map(item => ({
      path: `/eventbus/${item}`,
      name: `eventbus/${item}`,
      component: ESEventBusPageList[item].component,
    })),
  ...Object.keys(EsUlList)
    .map(item => ({
      path: `/ul/${item}`,
      name: `ul/${item}`,
      component: EsUlList[item].component,
    })),
  ...Object.keys(ESUtilsPageList)
    .map(item => ({
      path: `/utils/${item}`,
      name: `utils/${item}`,
      component: ESUtilsPageList[item].component,
    })),
  ...Object.keys(ESSlotPageList)
    .map(item => ({
      path: `/slot/${item}`,
      name: `slot/${item}`,
      component: ESSlotPageList[item].component,
    })),
  //----------------------------------------------------------------------------------------------
  ...Object.keys(QTViewPageList)
    .map(item => ({
      path: `/view/${item}`,
      name: `view/${item}`,
      component: QTViewPageList[item].component,
    })),
  ...Object.keys(QTTextPageList)
    .map(item => ({
      path: `/text/${item}`,
      name: `text/${item}`,
      component: QTTextPageList[item].component,
    })),
  ...Object.keys(QTImagePageList)
    .map(item => ({
      path: `/image/${item}`,
      name: `image/${item}`,
      component: QTImagePageList[item].component,
    })),
  ...Object.keys(QTRowPageList)
    .map(item => ({
      path: `/row/${item}`,
      name: `row/${item}`,
      component: QTRowPageList[item].component,
    })),
  ...Object.keys(QTColumnPageList)
    .map(item => ({
      path: `/column/${item}`,
      name: `column/${item}`,
      component: QTColumnPageList[item].component,
    })),
  ...Object.keys(QTButtonPageList)
    .map(item => ({
      path: `/button/${item}`,
      name: `button/${item}`,
      component: QTButtonPageList[item].component,
    })),
  ...Object.keys(TextViewPageList)
    .map(item => ({
      path: `/text-view/${item}`,
      name: `text-view/${item}`,
      component: TextViewPageList[item].component,
    })),
  ...Object.keys(QTGridViewPageList)
    .map(item => ({
      path: `/grid-view/${item}`,
      name: `grid-view/${item}`,
      component: QTGridViewPageList[item].component,
    })),
  ...Object.keys(QTListViewPageList)
    .map(item => ({
      path: `/list-view/${item}`,
      name: `list-view/${item}`,
      component: QTListViewPageList[item].component,
    })),
  ...Object.keys(QTPosterPageList)
    .map(item => ({
      path: `/poster/${item}`,
      name: `poster/${item}`,
      component: QTPosterPageList[item].component,
    })),
  ...Object.keys(QTNavBarPageList)
    .map(item => ({
      path: `/nav-bar/${item}`,
      name: `nav-bar/${item}`,
      component: QTNavBarPageList[item].component,
    })),
  ...Object.keys(QTWaterfallPageList)
    .map(item => ({
      path: `/waterfall/${item}`,
      name: `waterfall/${item}`,
      component: QTWaterfallPageList[item].component,
    })),
  ...Object.keys(QTWaterfallItemPageList)
    .map(item => ({
      path: `/waterfall/${item}`,
      name: `waterfall/${item}`,
      component: QTWaterfallItemPageList[item].component,
    })),
  ...Object.keys(QTWaterfallSectionPageList)
    .map(item => ({
      path: `/waterfall/${item}`,
      name: `waterfall/${item}`,
      component: QTWaterfallSectionPageList[item].component,
    })),
  ...Object.keys(QTTabsWaterfallPageList)
    .map(item => ({
      path: `/tabs-waterfall/${item}`,
      name: `tabs-waterfall/${item}`,
      component: QTTabsWaterfallPageList[item].component,
    })),
  ...Object.keys(QTTabsWaterfallSectionPageList)
    .map(item => ({
      path: `/tabs-waterfall/${item}`,
      name: `tabs-waterfall/${item}`,
      component: QTTabsWaterfallSectionPageList[item].component,
    })),
  ...Object.keys(QTTabsWaterfallItemPageList)
    .map(item => ({
      path: `/tabs-waterfall/${item}`,
      name: `tabs-waterfall/${item}`,
      component: QTTabsWaterfallItemPageList[item].component,
    })),
  ...Object.keys(QTTabsWaterfallSamplePageList)
    .map(item => ({
      path: `/tabs-waterfall/${item}`,
      name: `tabs-waterfall/${item}`,
      component: QTTabsWaterfallSamplePageList[item].component,
    })),

  //----------------------------Tabs 数据绑定------------------------------------
  ...Object.keys(QTTabsWaterfallDataBindingPageList)
    .map(item => ({
      path: `/tabs-data-binding/${item}`,
      name: `tabs-data-binding/${item}`,
      component: QTTabsWaterfallDataBindingPageList[item].component,
    })),
  ...Object.keys(QTTabsWaterfallDataBindingSectionPageList)
    .map(item => ({
      path: `/tabs-data-binding/${item}`,
      name: `tabs-data-binding/${item}`,
      component: QTTabsWaterfallDataBindingSectionPageList[item].component,
    })),
  ...Object.keys(QTTabsWaterfallDataBindingItemPageList)
    .map(item => ({
      path: `/tabs-data-binding/${item}`,
      name: `tabs-data-binding/${item}`,
      component: QTTabsWaterfallDataBindingItemPageList[item].component,
    })),
  ...Object.keys(QTTabsWaterfallDataBindingSamplePageList)
    .map(item => ({
      path: `/tabs-data-binding/${item}`,
      name: `tabs-data-binding/${item}`,
      component: QTTabsWaterfallDataBindingSamplePageList[item].component,
    })),
  //----------------------------------------------------------------------------
  ...Object.keys(QTClassifiedListViewPageList)
    .map(item => ({
      path: `/classified-list-view/${item}`,
      name: `classified-list-view/${item}`,
      component: QTClassifiedListViewPageList[item].component,
    })),

  ...Object.keys(QTLoadingPageList)
    .map(item => ({
      path: `/loading${item}`,
      name: `loading/${item}`,
      component: QTLoadingPageList[item].component,
    })),
  ...Object.keys(QTAnimationPageList)
    .map(item => ({
      path: `/animation${item}`,
      name: `animation/${item}`,
      component: QTAnimationPageList[item].component,
    })),
  ...Object.keys(QTWebViewComponentList)
    .map(item => ({
      path: `/webview${item}`,
      name: `webview/${item}`,
      component: QTWebViewComponentList[item].component,
    })),
  ...Object.keys(QTX5WebViewComponentList)
    .map(item => ({
      path: `/x5webview${item}`,
      name: `x5webview/${item}`,
      component: QTX5WebViewComponentList[item].component,
    })),
  ...Object.keys(QTQRCodePageList)
    .map(item => ({
      path: `/qrcode${item}`,
      name: `qrcode/${item}`,
      component: QTQRCodePageList[item].component,
    })),
  ...Object.keys(QTSeekBarPageList)
    .map(item => ({
      path: `/seekbar${item}`,
      name: `seekbar/${item}`,
      component: QTSeekBarPageList[item].component,
    })),
  ...Object.keys(QTProgressBarPageList)
    .map(item => ({
      path: `/progressbar${item}`,
      name: `progressbar/${item}`,
      component: QTProgressBarPageList[item].component,
    })),
  ...Object.keys(QTSelectSeriesPageList)
    .map(item => ({
      path: `/select-series${item}`,
      name: `select-series/${item}`,
      component: QTSelectSeriesPageList[item].component,
    })),
  ...Object.keys(QTCollapsePageList)
    .map(item => ({
      path: `/collapse${item}`,
      name: `collapse/${item}`,
      component: QTCollapsePageList[item].component,
    })),
  ...Object.keys(QTScrollViewPageList)
    .map(item => ({
      path: `/scroll-view${item}`,
      name: `scroll-view/${item}`,
      component: QTScrollViewPageList[item].component,
    })),
  ...Object.keys(QTAppIconPageList)
    .map(item => ({
      path: `/qt-app-icon${item}`,
      name: `qt-app-icon/${item}`,
      component: QTAppIconPageList[item].component,
    })),
  ...Object.keys(QTPluginViewPageList)
    .map(item => ({
      path: `/plugin-view${item}`,
      name: `plugin-view/${item}`,
      component: QTPluginViewPageList[item].component,
    })),
  ...Object.keys(QTAPIPageList)
    .map(item => ({
      path: `/api${item}`,
      name: `api/${item}`,
      component: QTAPIPageList[item].component,
    })),
  ...Object.keys(QTSwiperPageList)
    .map(item => ({
      path: `/swiper${item}`,
      name: `swiper/${item}`,
      component: QTSwiperPageList[item].component,
    })),
  ...Object.keys(QTLottiePageList)
    .map(item => ({
      path: `/lottie${item}`,
      name: `lottie/${item}`,
      component: QTLottiePageList[item].component,
    })),
  ...Object.keys(QTIndicatorPageList)
    .map(item => ({
      path: `/qt-indicator-list${item}`,
      name: `qt-indicator-list/${item}`,
      component: QTIndicatorPageList[item].component,
    })),
  ...Object.keys(QTSwiperPageList)
    .map(item => ({
      path: `/swiper${item}`,
      name: `swiper/${item}`,
      component: QTSwiperPageList[item].component,
    })),
  ...Object.keys(QTLottiePageList)
    .map(item => ({
      path: `/lottie${item}`,
      name: `lottie/${item}`,
      component: QTLottiePageList[item].component,
    })),
  ...Object.keys(QtModulePageList)
    .map(item => ({
      path: `/module/${item}`,
      name: `module/${item}`,
      component: QtModulePageList[item].component,
    })),
]

export default routes

