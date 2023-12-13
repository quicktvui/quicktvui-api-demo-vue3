import es_audio_player_start_page from './es-audio-player-start-page';
import es_audio_player_event_page from './es-audio-player-event-page';
import es_audio_player_global_event_page from './es-audio-player-global-event-page';
import es_audio_player_manager_page from './es-audio-player-manager-page';


const ESAudioPlayerPageList = {
  es_audio_player_start_page: {
    name: '使用初探',
    component: es_audio_player_start_page,
  },
  es_audio_player_event_page: {
    name: '监听播放事件',
    component: es_audio_player_event_page,
  },
  es_audio_player_global_event_page: {
    name: '全局监听播放事件',
    component: es_audio_player_global_event_page,
  },
  es_audio_player_manager_page: {
    name: '音频播放管理器',
    component: es_audio_player_manager_page,
  },
};
export default ESAudioPlayerPageList;
