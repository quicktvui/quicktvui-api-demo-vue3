import index from "./views/index.vue";
import error from "./views/error.vue";
import splash from "./views/splash/es-splash-page.vue";
//
import ESAPINavPageList from "./views/nav";
import ESRouterESList from "./components/es-router/es";
import ESComponentList from "./components/es-component";
import ESTextViewComponentList from "./components/es-component/text-view";
import ESLoadingViewComponentList from "./components/es-component/loading-view";
import ESWebViewComponentList from "./components/es-component/web-view";
import ESSurfaceViewComponentList from "./components/es-component/surface-view";
import ESBaseComponentList from "./components/es-base-component";
import ESComponentImgPageList from "./components/es-base-component/img";
import ESFlexDirectionPageList from "./components/es-flex/direction";
import ESFlexWrapPageList from "./components/es-flex/wrap";
import ESFlexJustifyContentPageList from "./components/es-flex/justify-content";
import ESFlexAlignItemsPageList from "./components/es-flex/align-items";
import ESFlexAlignContentPageList from "./components/es-flex/align-content";
import ESPageLifecycleList from "./components/es-lifecycle";
import ESModulePageList from "./components/es-module";
import ESLogPageList from "./components/es-log";
import ESKeyPageList from "./components/es-key";
import ESNetworkPageList from "./components/es-network";
import ESRangeSeekbarPageList from "./components/es-component/range-seek-bar";
import ESProgressBarComponentList from "./components/es-component/progress-bar";
import ESSeekBarComponentList from "./components/es-component/seek-bar";
import ESX5WebViewComponentList from "./components/es-component/x5web-view";
import ESChartComponentList from "./components/es-component/chart";
import ESAnimationPageList from "./components/es-animation";
import ESVideoPlayerPageList from "./components/es-video-player";
import ESPlayerManagerPageList from "./components/es-player-manager";
import ESADPlayerPageList from "./components/es-ad-player";
import ESAudioPlayerPageList from "./components/es-audio-player";
import ESAudioServicePlayerPageList from "./components/es-audio-service-player";
import ESSoundPoolPlayerPageList from "./components/es-sound-pool-player"
import ESM1905PlayerPageList from "./components/es-m1905-player"
import ESGameCenterPageList from "./components/es-game-center"
//
import QTAPINavPageList from "./views/nav/index"
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
import ExtendPageList from "./components/extend"

import {
  QTWaterfallPageList,
  QTWaterfallItemPageList,
  QTWaterfallSectionPageList
} from "./components/qt-waterfall";
import {
  QTTabsWaterfallPageList,
  QTTabsWaterfallSectionPageList,
  QTTabsWaterfallItemPageList
} from "./components/qt-tabs-waterfall";
import QTClassifiedListViewPageList from "./components/qt-classified-list-view"

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
  ...Object.keys(ESAPINavPageList)
    .map(item => ({
      path: `/nav/${item}`,
      name: `nav/${item}`,
      component: ESAPINavPageList[item].component,
    })),
  ...Object.keys(ESRouterESList)
    .map(item => ({
      path: `/router/${item}`,
      name: `router/${item}`,
      component: ESRouterESList[item].component,
    })),
  ...Object.keys(ESComponentList)
    .map(item => ({
      path: `/component/${item}`,
      name: `component/${item}`,
      component: ESComponentList[item].component,
    })),
  ...Object.keys(ESTextViewComponentList)
    .map(item => ({
      path: `/component/text/${item}`,
      name: `component/text/${item}`,
      component: ESTextViewComponentList[item].component,
    })),
  ...Object.keys(ESLoadingViewComponentList)
    .map(item => ({
      path: `/component/loading/${item}`,
      name: `component/loading/${item}`,
      component: ESLoadingViewComponentList[item].component,
    })),
  ...Object.keys(ESWebViewComponentList)
    .map(item => ({
      path: `/component/webview/${item}`,
      name: `component/webview/${item}`,
      component: ESWebViewComponentList[item].component,
    })),
  ...Object.keys(ESX5WebViewComponentList)
    .map(item => ({
      path: `/component/x5webview/${item}`,
      name: `component/x5webview/${item}`,
      component: ESX5WebViewComponentList[item].component,
    })),
  ...Object.keys(ESSurfaceViewComponentList)
    .map(item => ({
      path: `/component/surface/${item}`,
      name: `component/surface/${item}`,
      component: ESSurfaceViewComponentList[item].component,
    })),
  ...Object.keys(ESBaseComponentList)
    .map(item => ({
      path: `/component/base/${item}`,
      name: `component/base/${item}`,
      component: ESBaseComponentList[item].component,
    })),
  ...Object.keys(ESComponentImgPageList)
    .map(item => ({
      path: `/component/img/${item}`,
      name: `component/img/${item}`,
      component: ESComponentImgPageList[item].component,
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
  ...Object.keys(ESModulePageList)
    .map(item => ({
      path: `/module/${item}`,
      name: `module/${item}`,
      component: ESModulePageList[item].component,
    })),
  ...Object.keys(ESLogPageList)
    .map(item => ({
      path: `/log/${item}`,
      name: `log/${item}`,
      component: ESLogPageList[item].component,
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
  ...Object.keys(ESRangeSeekbarPageList)
    .map(item => ({
      path: `/component/rangeseekbar/${item}`,
      name: `component/rangeseekbar/${item}`,
      component: ESRangeSeekbarPageList[item].component,
    })),
  ...Object.keys(ESProgressBarComponentList)
    .map(item => ({
      path: `/component/progressbar/${item}`,
      name: `component/progressbar/${item}`,
      component: ESProgressBarComponentList[item].component,
    })),
  ...Object.keys(ESSeekBarComponentList)
    .map(item => ({
      path: `/component/seekbar/${item}`,
      name: `component/seekbar/${item}`,
      component: ESSeekBarComponentList[item].component,
    })),
  ...Object.keys(ESChartComponentList)
    .map(item => ({
      path: `/component/chart/${item}`,
      name: `component/chart/${item}`,
      component: ESChartComponentList[item].component,
    })),
  ...Object.keys(ESAnimationPageList)
    .map(item => ({
      path: `/animation/${item}`,
      name: `animation/${item}`,
      component: ESAnimationPageList[item].component,
    })),
  ...Object.keys(ESVideoPlayerPageList)
    .map(item => ({
      path: `/video/${item}`,
      name: `video/${item}`,
      component: ESVideoPlayerPageList[item].component,
    })),
  ...Object.keys(ESM1905PlayerPageList)
    .map(item => ({
      path: `/m1905/${item}`,
      name: `m1905/${item}`,
      component: ESM1905PlayerPageList[item].component,
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
  ...Object.keys(ESGameCenterPageList)
    .map(item => ({
      path: `/game/${item}`,
      name: `game/${item}`,
      component: ESGameCenterPageList[item].component,
    })),
  ...Object.keys(QTAPINavPageList)
    .map(item => ({
      path: `/nav/${item}`,
      name: `nav/${item}`,
      component: QTAPINavPageList[item].component,
    })),
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
  ...Object.keys(QTClassifiedListViewPageList)
    .map(item => ({
      path: `/classified-list-view/${item}`,
      name: `classified-list-view/${item}`,
      component: QTClassifiedListViewPageList[item].component,
    })),
  ...Object.keys(ExtendPageList)
    .map(item => ({
      path: `/extend${item}`,
      name: `extend/${item}`,
      component: ExtendPageList[item].component,
    }))
]

export default routes

