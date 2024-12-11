import es_audio_service_player_start_page from './es-audio-service-player-start-page';
import es_audio_service_player_event_page from './es-audio-service-player-event-page';
import es_audio_service_player_global_event_page from './es-audio-service-player-global-event-page';
import es_audio_service_player_manager_page from './es-audio-service-player-manager-page';

const ESAudioServicePlayerPageList = {
  es_audio_service_player_start_page: {
    name: '使用初探',
    component: es_audio_service_player_start_page,
  },
  es_audio_service_player_event_page: {
    name: '监听播放事件',
    component: es_audio_service_player_event_page,
  },
  es_audio_service_player_global_event_page: {
    name: '全局监听播放事件',
    component: es_audio_service_player_global_event_page,
  },
  es_audio_service_player_manager_page: {
    name: '音频服务播放管理器',
    component: es_audio_service_player_manager_page,
  },
};
export default ESAudioServicePlayerPageList;
