import es_player_manager_start_page from './es-player-manager-start-page';
import es_player_manager_control_page from './es-player-manager-control-page';
import es_player_manager_progress_page from './es-player-manager-progress-page';
import es_player_manager_window_page from './es-player-manager-window-page';
import es_player_manager_size_page from './es-player-manager-size-page';
import es_interceptor_media_item_list_page from './es-interceptor-media-item-list-page';
import es_interceptor_media_item_page from './es-interceptor-media-item-page';
import es_interceptor_media_source_list_page from './es-interceptor-media-source-list-page';
import es_interceptor_media_source_page from './es-interceptor-media-source-page';
import es_player_manager_position_page from './es-player-manager-position-page';
import es_player_manager_player_page from './es-player-manager-player-page';
import es_player_manager_event_page from './es-player-manager-event-page';
import es_player_manager_global_event_page from './es-player-manager-global-event-page';
import es_player_manager_view_page from './es-player-manager-view-page';
import es_player_manager_previous_roll_ad_page from './es-player-manager-previous-roll-ad-page';
import es_player_manager_post_roll_ad_page from './es-player-manager-post-roll-ad-page';
import es_player_manager_play_mode_page from './es-player-manager-play-mode-page';
import es_player_manager_aspect_ratio_page from './es-player-manager-aspect-ratio-page';
import es_player_manager_definition_page from './es-player-manager-definition-page';
import es_player_manager_decode_page from './es-player-manager-decode-page';
import es_player_manager_rate_page from './es-player-manager-rate-page';
import es_player_manager_multi_player_page from './es-player-manager-multi-player-page';

const ESPlayerManagerPageList = {
  es_player_manager_start_page: {
    name: '使用初探',
    component: es_player_manager_start_page,
  },
  es_player_manager_control_page: {
    name: '播放控制',
    component: es_player_manager_control_page,
  },
  es_player_manager_progress_page: {
    name: '播放进度',
    component: es_player_manager_progress_page,
  },
  es_player_manager_window_page: {
    name: '播放窗口切换',
    component: es_player_manager_window_page,
  },
  es_player_manager_position_page: {
    name: '播放起始位置',
    component: es_player_manager_position_page,
  },
  es_player_manager_size_page: {
    name: '播放尺寸切换',
    component: es_player_manager_size_page,
  },
  es_player_manager_player_page: {
    name: '自定义播放器',
    component: es_player_manager_player_page,
  },
  es_player_manager_event_page: {
    name: '播放事件页面监听',
    component: es_player_manager_event_page,
  },
  es_player_manager_global_event_page: {
    name: '全局监听播放事件',
    component: es_player_manager_global_event_page,
  },
  es_interceptor_media_item_list_page: {
    name: 'MediaItemList拦截器',
    component: es_interceptor_media_item_list_page,
  },
  es_interceptor_media_item_page: {
    name: 'MediaItem拦截器',
    component: es_interceptor_media_item_page,
  },
  es_interceptor_media_source_list_page: {
    name: 'MediaSourceList拦截器',
    component: es_interceptor_media_source_list_page,
  },
  es_interceptor_media_source_page: {
    name: 'MediaSource拦截器',
    component: es_interceptor_media_source_page,
  },
  es_player_manager_play_mode_page: {
    name: '播放模式',
    component: es_player_manager_play_mode_page,
  },
  es_player_manager_aspect_ratio_page: {
    name: '画面比例',
    component: es_player_manager_aspect_ratio_page,
  },
  es_player_manager_definition_page: {
    name: '清晰度',
    component: es_player_manager_definition_page,
  },
  es_player_manager_decode_page: {
    name: '解码方式',
    component: es_player_manager_decode_page,
  },
  es_player_manager_rate_page: {
    name: '播放倍速',
    component: es_player_manager_rate_page,
  },
  es_player_manager_previous_roll_ad_page: {
    name: '前贴广告',
    component: es_player_manager_previous_roll_ad_page,
  },
  es_player_manager_post_roll_ad_page: {
    name: '后贴广告',
    component: es_player_manager_post_roll_ad_page,
  },
  es_player_manager_view_page: {
    name: '自定义播放视图',
    component: es_player_manager_view_page,
  },
  es_player_manager_multi_player_page: {
    name: '多类型播放',
    component: es_player_manager_multi_player_page,
  },
};
export default ESPlayerManagerPageList;
