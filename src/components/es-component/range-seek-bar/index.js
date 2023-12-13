//
import es_seek_bar_sample_page from "./es-seek-bar-sample-page";
import es_seek_bar_basics_page from "./es-seek-bar-basics-page";
import es_seek_bar_progress_page from "./es-seek-bar-progress-page";
import es_seek_bar_indicator_page from "./es-seek-bar-indicator-page";
import es_seek_bar_thumb_page from "./es-seek-bar-thumb-page";
import es_seek_bar_tick_page from "./es-seek-bar-tick-page";
import es_vertical_seek_bar_page from "./es-vertical-seek-bar-page";
import es_seek_bar_step_page from "./es-seek-bar-step-page";
import es_seek_bar_mode_page from "./es-seek-bar-mode-page";

const ESRangeSeekbarPageList = {
  es_seek_bar_sample_page: {
    name: '使用初探',
    component: es_seek_bar_sample_page,
  },
  es_seek_bar_basics_page: {
    name: '单向模式',
    component: es_seek_bar_basics_page,
  },
  es_seek_bar_mode_page: {
    name: '范围模式',
    component: es_seek_bar_mode_page,
  },
  es_seek_bar_progress_page: {
    name: '进度条',
    component: es_seek_bar_progress_page,
  },
  es_seek_bar_indicator_page: {
    name: '提示框',
    component: es_seek_bar_indicator_page,
  },
  es_seek_bar_thumb_page: {
    name: '按钮',
    component: es_seek_bar_thumb_page,
  },
  es_seek_bar_tick_page: {
    name: '刻度',
    component: es_seek_bar_tick_page,
  },
  es_seek_bar_step_page: {
    name: '分步',
    component: es_seek_bar_step_page,
  },
  es_vertical_seek_bar_page: {
    name: '竖向',
    component: es_vertical_seek_bar_page,
  },
};
export default ESRangeSeekbarPageList;




