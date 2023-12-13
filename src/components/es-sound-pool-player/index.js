import es_sound_pool_player_start_page from './es-sound-pool-player-start-page';
import es_sound_pool_player_event_page from './es-sound-pool-player-event-page';
import es_sound_pool_player_global_event_page from './es-sound-pool-player-global-event-page';
import es_sound_pool_player_manager_page from './es-sound-pool-player-manager-page';

const ESSoundPoolPlayerPageList = {
  es_sound_pool_player_start_page: {
    name: '使用初探',
    component: es_sound_pool_player_start_page,
  },
  es_sound_pool_player_event_page: {
    name: '监听播放事件',
    component: es_sound_pool_player_event_page,
  },
  es_sound_pool_player_global_event_page: {
    name: '全局监听播放事件',
    component: es_sound_pool_player_global_event_page,
  },
  es_sound_pool_player_manager_page: {
    name: 'SoundPool播放管理器',
    component: es_sound_pool_player_manager_page,
  },
};
export default ESSoundPoolPlayerPageList;
