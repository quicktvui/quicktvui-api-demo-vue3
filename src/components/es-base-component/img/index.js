import es_component_img_resize_mode_page from './es-component-img-resize-mode-page';
import es_component_img_net_page from './es-component-img-net-page';
import es_component_img_assets_page from './es-component-img-assets-page';
import es_component_img_gif_page from './es-component-img-gif-page';

const ESComponentImgPageList = {
  es_component_img_net_page: {
    name: '网络图片',
    component: es_component_img_net_page,
  },
  es_component_img_assets_page: {
    name: '本地图片',
    component: es_component_img_assets_page,
  },
  es_component_img_gif_page: {
    name: 'GIF',
    component: es_component_img_gif_page,
  },
  es_component_img_resize_mode_page: {
    name: 'resize_mode',
    component: es_component_img_resize_mode_page,
  },
};
export default ESComponentImgPageList;
