import es_m1905_player_start_page from './es-m1905-player-start-page';
import es_m1905_player_event_page from './es-m1905-player-event-page';
import es_m1905_player_global_event_page from './es-m1905-player-global-event-page';

const ESM1905PlayerPageList = {
  es_m1905_player_start_page: {
    name: '使用初探',
    component: es_m1905_player_start_page,
  },
  es_m1905_player_event_page: {
    name: '监听播放事件',
    component: es_m1905_player_event_page,
  },
  es_m1905_player_global_event_page: {
    name: '全局监听播放事件',
    component: es_m1905_player_global_event_page,
  },
};
export default ESM1905PlayerPageList;
