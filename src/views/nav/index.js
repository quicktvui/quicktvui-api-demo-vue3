import es_nav_start_page from './es-nav-start-page';
import es_nav_slot_page from './es-nav-slot-page';
import es_nav_router_page from './es-nav-router-page';
import es_nav_flex_page from './es-nav-flex-page';
import es_nav_dialog_page from './es-nav-dialog-page';
import es_nav_lifecycle_page from './es-nav-lifecycle-page';
import es_nav_module_page from './es-nav-module-page';
import es_nav_log_page from './es-nav-log-page';
import es_nav_key_page from './es-nav-key-page';
import es_nav_network_page from './es-nav-network-page';
import es_nav_video_player_page from './es-nav-video-player-page';
import es_nav_ad_player_page from './es-nav-ad-player-page';
import es_nav_player_manager_page from './es-nav-player-manager-page';
import es_nav_audio_player_page from './es-nav-audio-player-page';
import es_nav_audio_service_player_page from './es-nav-audio-service-player-page';
import es_nav_sound_pool_player_page from './es-nav-sound-pool-player-page';
import es_nav_xlog_page from './es-nav-xlog-page';
import es_nav_eventbus_page from './es-nav-eventbus-page';
import es_nav_ul_page from './es-nav-ul-page';
import es_nav_component_page from './es-nav-component-page';
import es_nav_utils_page from './es-nav-utils-page';

import qt_nav_div_page from './qt-nav-div-page';
import qt_nav_view_page from './qt-nav-view-page.vue';
import qt_nav_text_page from './qt-nav-text-page.vue';
import qt_nav_image_page from './qt-nav-image-page.vue';
import qt_nav_row_page from './qt-nav-row-page.vue';
import qt_nav_column_page from './qt-nav-column-page.vue';
import qt_nav_button_page from './qt-nav-button-page.vue';
import qt_nav_grid_view_page from './qt-nav-grid-view-page.vue';
import qt_nav_list_view_page from './qt-nav-list-view-page.vue';
import qt_nav_poster_view_page from './qt-nav-poster-view-page.vue';
import qt_nav_bar_page from './qt-nav-bar-page.vue';
import qt_nav_waterfall_page from './qt-nav-waterfall-page.vue';
import qt_nav_tabs_waterfall_page from './qt-nav-tabs-waterfall-page.vue';
import qt_nav_tabs_data_binding_page from './qt-nav-tabs-data-binding-page.vue';
import qt_nav_classified_list_view_page from './qt-nav-classified-list-view-page.vue';
import qt_nav_text_view_page from './qt-nav-text-view-page.vue';
import qt_nav_loading_page from './qt-nav-loading-page.vue';
import qt_nav_animation_page from './qt-nav-animation-page.vue';
import qt_nav_webview_page from './qt-nav-webview-page.vue';
import qt_nav_x5webview_page from './qt-nav-x5webview-page.vue';
import qt_nav_qrcode_page from './qt-nav-qrcode-page.vue';
import qt_nav_progress_bar_page from './qt-nav-progress-bar-page.vue';
import qt_nav_seek_bar_page from './qt-nav-seek-bar-page.vue'
import qt_nav_select_series_page from './qt-nav-media-series-page.vue'
import qt_nav_collapse_page from './qt-nav-collapse-page.vue'
import qt_nav_scroll_view_page from './qt-nav-scroll-view-page.vue'
import qt_nav_app_icon_page from './qt-nav-app-icon-page.vue'
import qt_nav_plugin_view_page from './qt-nav-plugin-view-page.vue'
import qt_nav_api_page from './qt-nav-api-page.vue'
import qt_nav_swiper_page from './qt-nav-swiper-page.vue'
import qt_nav_lottie_page from './qt-nav-lottie-page.vue'
import qt_indicator_list_view_page from './qt-nav-indicator-list-view-page.vue'
import qt_nav_module_page from './qt-nav-module-page';

export const QTComponentNavPageList = {
  qt_nav_div_page: {
    name: 'div',
    component: qt_nav_div_page,
  },
  qt_nav_view_page: {
    name: 'QTView',
    component: qt_nav_view_page,
  },
  qt_nav_text_page: {
    name: 'QTText',
    component: qt_nav_text_page,
  },
  qt_nav_image_page: {
    name: 'QTImage',
    component: qt_nav_image_page,
  },
  qt_nav_row_page: {
    name: 'QTRow',
    component: qt_nav_row_page,
  },
  qt_nav_column_page: {
    name: 'QTColumn',
    component: qt_nav_column_page,
  },
  qt_nav_loading_page: {
    name: 'QTLoading',
    component: qt_nav_loading_page,
  },
  qt_nav_button_page: {
    name: 'QTButton',
    component: qt_nav_button_page,
  },
  qt_nav_text_view_page: {
    name: 'TextView',
    component: qt_nav_text_view_page,
  },
  qt_nav_animation_page: {
    name: 'QTAnimation',
    component: qt_nav_animation_page,
  },
  qt_nav_app_icon_page: {
    name: 'QTAppIcon',
    component: qt_nav_app_icon_page,
  },
  qt_nav_webview_page: {
    name: 'QTWebView',
    component: qt_nav_webview_page,
  },
  qt_nav_x5webview_page: {
    name: 'QTX5WebView',
    component: qt_nav_x5webview_page,
  },
  qt_nav_qrcode_page: {
    name: 'QTQRCode',
    component: qt_nav_qrcode_page,
  },
  qt_nav_progress_bar_page: {
    name: 'QTProgressBar',
    component: qt_nav_progress_bar_page,
  },
  qt_nav_seek_bar_page: {
    name: 'QTSeekBar',
    component: qt_nav_seek_bar_page,
  },
  qt_nav_grid_view_page: {
    name: 'QTGridView',
    component: qt_nav_grid_view_page,
  },
  qt_nav_list_view_page: {
    name: 'QTListView',
    component: qt_nav_list_view_page,
  },
  qt_nav_poster_view_page: {
    name: 'QTPoster',
    component: qt_nav_poster_view_page,
  },
  qt_nav_bar_page: {
    name: 'QTNavBar',
    component: qt_nav_bar_page,
  },
  qt_nav_waterfall_page: {
    name: 'QTWaterfall',
    component: qt_nav_waterfall_page,
  },
  qt_nav_tabs_waterfall_page: {
    name: 'QTTabsWaterfall',
    component: qt_nav_tabs_waterfall_page,
  },
  qt_nav_tabs_data_binding_page: {
    name: 'QTTabsDataBinding',
    component: qt_nav_tabs_data_binding_page,
  },
  qt_nav_classified_list_view_page: {
    name: 'QTClassifiedListView',
    component: qt_nav_classified_list_view_page,
  },
  qt_nav_select_series_page: {
    name: 'QTMediaSeries',
    component: qt_nav_select_series_page,
  },
  qt_nav_collapse_page: {
    name: 'QTCollapse',
    component: qt_nav_collapse_page,
  },
  // qt_nav_scroll_view_page: {
  //   name: 'QTScrollView',
  //   component: qt_nav_scroll_view_page,
  // },
  qt_nav_plugin_view_page: {
    name: 'QTPluginView',
    component: qt_nav_plugin_view_page,
  },
  // qt_nav_api_page: {
  //   name: 'QTAPI',
  //   component: qt_nav_api_page,
  // },
  // qt_nav_swiper_page: {
  //   name: 'QTSwiper',
  //   component: qt_nav_swiper_page,
  // },
  qt_nav_lottie_page: {
    name: 'QTLottie',
    component: qt_nav_lottie_page,
  },
  // qt_indicator_list_view_page: {
  //   name: 'QTIndicatorListView',
  //   component: qt_indicator_list_view_page,
  // },
  //
  // qt_nav_module_page: {
  //   name: 'QTModule',
  //   component: qt_nav_module_page,
  // },
}


export const QTFrameworkNavPageList = {
  // es_nav_start_page: {
  //   name: '起步',
  //   component: es_nav_start_page,
  // },
  es_nav_module_page: {
    name: '扩展模块',
    component: es_nav_module_page,
  },
  qt_nav_module_page: {
    name: '扩展模块（qt 调用）',
    component: qt_nav_module_page,
  },
  es_nav_component_page: {
    name: '组件',
    component: es_nav_component_page,
  },
  es_nav_flex_page: {
    name: '布局',
    component: es_nav_flex_page,
  },
  es_nav_lifecycle_page: {
    name: '页面生命周期',
    component: es_nav_lifecycle_page,
  },
  es_nav_dialog_page: {
    name: '弹窗',
    component: es_nav_dialog_page,
  },
  es_nav_router_page: {
    name: '页面路由',
    component: es_nav_router_page,
  },
  es_nav_log_page: {
    name: '日志',
    component: es_nav_log_page,
  },
  es_nav_key_page: {
    name: '按键',
    component: es_nav_key_page,
  },
  es_nav_network_page: {
    name: '网络',
    component: es_nav_network_page,
  },
  es_nav_sound_pool_player_page: {
    name: 'SoundPool播放器',
    component: es_nav_sound_pool_player_page,
  },
  es_nav_audio_player_page: {
    name: '音频播放器',
    component: es_nav_audio_player_page,
  },
  es_nav_audio_service_player_page: {
    name: '音频播放服务',
    component: es_nav_audio_service_player_page,
  },
  es_nav_video_player_page: {
    name: '视频播放器',
    component: es_nav_video_player_page,
  },
  es_nav_ad_player_page: {
    name: '广告播放器',
    component: es_nav_ad_player_page,
  },
  es_nav_player_manager_page: {
    name: '播放管理器',
    component: es_nav_player_manager_page,
  },
  es_nav_eventbus_page: {
    name: 'EventBus',
    component: es_nav_eventbus_page,
  },
  es_nav_xlog_page: {
    name: 'xlog日志',
    component: es_nav_xlog_page,
  },
  es_nav_ul_page: {
    name: 'ul-列表模块',
    component: es_nav_ul_page,
  },
  es_nav_utils_page: {
    name: '工具',
    component: es_nav_utils_page,
  },
  es_nav_slot_page: {
    name: 'JSView',
    component: es_nav_slot_page,
  },
};
