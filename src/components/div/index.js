import div_basic_page from './div-basic-page';
import div_click_page from './div-click-page';
import div_focus_page from './div-focus-page';
import div_focus_background from './div-focus-background';
import div_background_page from './div-background-page';
import div_gradient_background_page from './div-gradient-background-page';
import div_border_page from './div-border-page';
import div_background_img_page from './div-background-img-page';

const QTDivPageList = {
  div_basic_page: {
    name: '使用初探',
    component: div_basic_page,
  },
  div_focus_page: {
    name: '焦点事件',
    component: div_focus_page,
  },
  div_click_page: {
    name: '点击事件',
    component: div_click_page,
  },
  div_background_page: {
    name: '背景色',
    component: div_background_page,
  },
  div_focus_background: {
    name: '焦点背景色',
    component: div_focus_background,
  },
  div_gradient_background_page: {
    name: '渐变背景色',
    component: div_gradient_background_page,
  },
  div_background_img_page: {
    name: '背景图片',
    component: div_background_img_page,
  },
  div_border_page: {
    name: '边框',
    component: div_border_page,
  }
};
export default QTDivPageList;
