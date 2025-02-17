import qt_view_start_page from './qt-view-start-page';
import qt_view_click_page from './qt-view-click-page';
import qt_view_focus_page from './qt-view-focus-page';
import qt_view_focus_background_page from './qt-view-focus-background-page';
import qt_view_background_page from './qt-view-background-page';
import qt_view_gradient_background_page from './qt-view-gradient-background-page';
import qt_view_border_page from './qt-view-border-page';
import qt_view_background_img_page from './qt-view-background-img-page';

const QTViewPageList = {
  qt_view_start_page: {
    name: '使用初探',
    component: qt_view_start_page,
  },
  qt_view_focus_page: {
    name: '焦点事件',
    component: qt_view_focus_page,
  },
  qt_view_click_page: {
    name: '点击事件',
    component: qt_view_click_page,
  },
  qt_view_background_page: {
    name: '背景色',
    component: qt_view_background_page,
  },
  qt_view_focus_background_page: {
    name: '焦点背景色',
    component: qt_view_focus_background_page,
  },
  qt_view_gradient_background_page: {
    name: '渐变背景色',
    component: qt_view_gradient_background_page,
  },
  qt_view_background_img_page: {
    name: '背景图片',
    component: qt_view_background_img_page,
  },
  qt_view_border_page: {
    name: '边框',
    component: qt_view_border_page,
  }
};
export default QTViewPageList;
