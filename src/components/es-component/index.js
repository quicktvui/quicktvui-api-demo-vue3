import component_loading_view_page from './loading-view/index.vue';
import component_web_view_page from './web-view/index.vue';
import component_x5web_view_page from './x5web-view/index.vue';
import component_range_seek_bar_page from './range-seek-bar/index.vue';
import component_gradient_background_page from './gradient/es-gradient-background-page';
import component_qr_code_page from './qr-code/es-qrcode-page';
import component_progress_bar_page from './progress-bar/es-progress-bar-start-page';
import component_seek_bar_page from './seek-bar/es-seek-bar-start-page';

const ESComponentList = {
  component_loading_view_page: {
    name: "loading-view",
    component: component_loading_view_page,
  },
  component_web_view_page: {
    name: "web-view",
    component: component_web_view_page,
  },
  component_x5web_view_page: {
    name: "x5web-view",
    component: component_x5web_view_page,
  },
  component_range_seek_bar_page: {
    name: "range-seek-bar",
    component: component_range_seek_bar_page,
  },
  component_gradient_background_page: {
    name: "gradient-background",
    component: component_gradient_background_page,
  },
  component_qr_code_page: {
    name: "qr-code",
    component: component_qr_code_page,
  },
  component_progress_bar_page: {
    name: "progress-bar",
    component: component_progress_bar_page,
  },
  component_seek_bar_page: {
    name: "seek-bar",
    component: component_seek_bar_page,
  },
};
export default ESComponentList;
