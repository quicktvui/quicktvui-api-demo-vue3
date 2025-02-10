import es_video_player_start_page from './es-video-player-start-page';
import es_video_player_control_page from './es-video-player-control-page';
import es_video_player_event_page from './es-video-player-event-page';
import es_video_player_global_event_page from './es-video-player-global-event-page';
import es_video_player_play_mode_page from './es-video-player-play-mode-page';
import es_video_player_play_rate_page_page from './es-video-player-play-rate-page';
import es_video_player_aspect_ratio_page_page from './es-video-player-aspect-ratio-page';
import es_video_player_render_page_page from './es-video-player-render-page';
import es_video_player_decode_page_page from './es-video-player-decode-page';
import es_video_player_definition_page_page from './es-video-player-definition-page';
import es_video_player_progress_page from './es-video-player-progress-page';
import es_video_player_type_page_page from './es-video-player-type-page';
import es_video_player_size_page_page from './es-video-player-size-page';

const ESVideoPlayerPageList = {
  es_video_player_start_page: {
    name: '使用初探',
    component: es_video_player_start_page,
  },
  es_video_player_control_page: {
    name: '播放控制',
    component: es_video_player_control_page,
  },
  es_video_player_progress_page: {
    name: '播放进度',
    component: es_video_player_progress_page,
  },
  es_video_player_event_page: {
    name: '监听播放事件',
    component: es_video_player_event_page,
  },
  es_video_player_global_event_page: {
    name: '全局监听播放事件',
    component: es_video_player_global_event_page,
  },
  es_video_player_play_mode_page: {
    name: '播放模式',
    component: es_video_player_play_mode_page,
  },
  es_video_player_play_rate_page_page: {
    name: '播放倍速',
    component: es_video_player_play_rate_page_page,
  },
  es_video_player_aspect_ratio_page_page: {
    name: '画面比例',
    component: es_video_player_aspect_ratio_page_page,
  },
  es_video_player_render_page_page: {
    name: '渲染方式',
    component: es_video_player_render_page_page,
  },
  es_video_player_decode_page_page: {
    name: '解码方式',
    component: es_video_player_decode_page_page,
  },
  es_video_player_type_page_page: {
    name: '播放器类型',
    component: es_video_player_type_page_page,
  },
  es_video_player_definition_page_page: {
    name: '清晰度',
    component: es_video_player_definition_page_page,
  },
  es_video_player_size_page_page: {
    name: '播放尺寸切换',
    component: es_video_player_size_page_page,
  },
};
export default ESVideoPlayerPageList;
