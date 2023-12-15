import es_nav_router_page from './es-nav-router-page';
import es_nav_lifecycle_page from './es-nav-lifecycle-page';
import es_nav_log_page from './es-nav-log-page';
import es_nav_key_page from './es-nav-key-page';
import es_nav_network_page from './es-nav-network-page';
import qt_nav_animation_page from './qt-nav-animation-page';
import es_nav_video_player_page from './es-nav-video-player-page';
import es_nav_ad_player_page from './es-nav-ad-player-page';
import es_nav_player_manager_page from './es-nav-player-manager-page';
import es_nav_audio_player_page from './es-nav-audio-player-page';
import es_nav_audio_service_player_page from './es-nav-audio-service-player-page';
import es_nav_sound_pool_player_page from './es-nav-sound-pool-player-page';
import qt_nav_view_page from './qt-nav-view-page.vue';
import qt_nav_text_page from './qt-nav-text-page.vue';
import qt_nav_image_page from './qt-nav-image-page.vue';
import qt_nav_row_page from './qt-nav-row-page.vue';
import qt_nav_column_page from './qt-nav-column-page.vue';
import qt_nav_button_page from './qt-nav-button-page.vue';
import qt_grid_view_page from './qt-grid-view-page.vue';
import qt_list_view_page from './qt-list-view-page.vue';
import qt_poster_view_page from './qt-poster-view-page.vue';
import qt_nav_bar_page from './qt-nav-bar-page.vue';
import qt_nav_waterfall_page from './qt-nav-waterfall-page.vue';
import qt_nav_tabs_waterfall_page from './qt-nav-tabs-waterfall-page.vue';
import qt_classified_list_view_page from './qt-classified-list-view-page.vue';
import qt_nav_webview_page from './qt-nav-webview-page.vue';
import qt_nav_x5webview_page from './qt-nav-x5webview-page.vue';
import qt_nav_qrcode_page from './qt-nav-qrcode-page.vue';
import qt_nav_progress_bar_page from './qt-nav-progress-bar-page.vue';
import qt_nav_seek_bar_page from './qt-nav-seek-bar-page.vue'
import qt_nav_loading_page from './qt-nav-loading-page.vue';
import qt_nav_dialog_page from './qt-nav-dialog-page.vue';

export const QTComponentNavPageList = {
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
  qt_nav_dialog_page: {
    name: 'QTDialog',
    component: qt_nav_dialog_page,
  },
  qt_nav_button_page: {
    name: 'QTButton',
    component: qt_nav_button_page,
  },
  qt_nav_animation_page: {
    name: 'QTAnimation',
    component: qt_nav_animation_page,
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
  qt_grid_view_page: {
    name: 'QTGridView',
    component: qt_grid_view_page,
  },
  qt_list_view_page: {
    name: 'QTListView',
    component: qt_list_view_page,
  },
  qt_poster_view_page: {
    name: 'QTPoster',
    component: qt_poster_view_page,
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
    name: 'QTTabs',
    component: qt_nav_tabs_waterfall_page,
  },
  qt_classified_list_view_page: {
    name: 'QTClassifiedListView',
    component: qt_classified_list_view_page,
  },
}

export const QTPlayerNavPageList = {
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
};

export const QTFrameworkNavPageList = {
  es_nav_lifecycle_page: {
    name: '页面生命周期',
    component: es_nav_lifecycle_page,
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
};
