import index from "./views/index/index.vue";
import error from "./views/error/index.vue";
import splash from "./views/splash/index.vue";
//
import ESRouterESList from "./components/es-router/es";
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
import ESVideoPlayerPageList from "./components/es-video-player";
import ESPlayerManagerPageList from "./components/es-player-manager";
import ESADPlayerPageList from "./components/es-ad-player";
import ESAudioPlayerPageList from "./components/es-audio-player";
import ESAudioServicePlayerPageList from "./components/es-audio-service-player";
import ESSoundPoolPlayerPageList from "./components/es-sound-pool-player"
//
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

import {
  QTComponentNavPageList,
  QTFrameworkNavPageList,
  QTPlayerNavPageList
} from './views/nav/index'

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
  ...Object.keys(QTPlayerNavPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTPlayerNavPageList[item].component,
    })),
  ...Object.keys(ESRouterESList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESRouterESList[item].component,
    })),
  ...Object.keys(ESFlexDirectionPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESFlexDirectionPageList[item].component,
    })),
  ...Object.keys(ESFlexWrapPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESFlexWrapPageList[item].component,
    })),
  ...Object.keys(ESFlexJustifyContentPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESFlexJustifyContentPageList[item].component,
    })),
  ...Object.keys(ESFlexAlignItemsPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESFlexAlignItemsPageList[item].component,
    })),
  ...Object.keys(ESFlexAlignContentPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESFlexAlignContentPageList[item].component,
    })),
  ...Object.keys(ESPageLifecycleList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESPageLifecycleList[item].component,
    })),
  ...Object.keys(ESModulePageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESModulePageList[item].component,
    })),
  ...Object.keys(ESLogPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESLogPageList[item].component,
    })),
  ...Object.keys(ESKeyPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESKeyPageList[item].component,
    })),
  ...Object.keys(ESNetworkPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESNetworkPageList[item].component,
    })),
  ...Object.keys(ESVideoPlayerPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESVideoPlayerPageList[item].component,
    })),
  ...Object.keys(ESAudioPlayerPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESAudioPlayerPageList[item].component,
    })),
  ...Object.keys(ESAudioServicePlayerPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESAudioServicePlayerPageList[item].component,
    })),
  ...Object.keys(ESSoundPoolPlayerPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESSoundPoolPlayerPageList[item].component,
    })),
  ...Object.keys(ESADPlayerPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESADPlayerPageList[item].component,
    })),
  ...Object.keys(ESPlayerManagerPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: ESPlayerManagerPageList[item].component,
    })),
  ...Object.keys(QTViewPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTViewPageList[item].component,
    })),
  ...Object.keys(QTTextPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTTextPageList[item].component,
    })),
  ...Object.keys(QTImagePageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTImagePageList[item].component,
    })),
  ...Object.keys(QTRowPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTRowPageList[item].component,
    })),
  ...Object.keys(QTColumnPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTColumnPageList[item].component,
    })),
  ...Object.keys(QTButtonPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTButtonPageList[item].component,
    })),
  ...Object.keys(TextViewPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: TextViewPageList[item].component,
    })),
  ...Object.keys(QTGridViewPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTGridViewPageList[item].component,
    })),
  ...Object.keys(QTListViewPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTListViewPageList[item].component,
    })),
  ...Object.keys(QTPosterPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTPosterPageList[item].component,
    })),
  ...Object.keys(QTNavBarPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTNavBarPageList[item].component,
    })),
  ...Object.keys(QTWaterfallPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTWaterfallPageList[item].component,
    })),
  ...Object.keys(QTWaterfallItemPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTWaterfallItemPageList[item].component,
    })),
  ...Object.keys(QTWaterfallSectionPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTWaterfallSectionPageList[item].component,
    })),
  ...Object.keys(QTTabsWaterfallPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTTabsWaterfallPageList[item].component,
    })),
  ...Object.keys(QTTabsWaterfallSectionPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTTabsWaterfallSectionPageList[item].component,
    })),
  ...Object.keys(QTTabsWaterfallItemPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTTabsWaterfallItemPageList[item].component,
    })),
  ...Object.keys(QTClassifiedListViewPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTClassifiedListViewPageList[item].component,
    })),
  ...Object.keys(QTLoadingPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTLoadingPageList[item].component,
    })),
  ...Object.keys(QTAnimationPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTAnimationPageList[item].component,
    })),
  ...Object.keys(QTWebViewComponentList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTWebViewComponentList[item].component,
    })),
  ...Object.keys(QTX5WebViewComponentList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTX5WebViewComponentList[item].component,
    })),
  ...Object.keys(QTQRCodePageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTQRCodePageList[item].component,
    })),
  ...Object.keys(QTSeekBarPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTSeekBarPageList[item].component,
    })),
  ...Object.keys(QTProgressBarPageList)
    .map(item => ({
      path: `/${item}`,
      name: `${item}`,
      component: QTProgressBarPageList[item].component,
    })),
]

export default routes

