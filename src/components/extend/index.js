import qt_loading_view_start_page from './qt-loading-view-start-page';
import dialog_start_page from './dialog-start-page';
import qr_view_start_page from './qr-view-start-page';
import img_transition_start_page from './img-transition-start-page';
import iframe_start_page from './iframe-start-page';
import seek_bar_start_page from './seek-bar-start-page';

const ExtendPageList = {
  qt_loading_view_start_page: {
    name: 'qt-loading-view',
    component: qt_loading_view_start_page,
  },
  dialog_start_page: {
    name: 'dialog',
    component: dialog_start_page,
  },
  qr_view_start_page: {
    name: 'qr-view',
    component: qr_view_start_page,
  },
  img_transition_start_page: {
    name: 'img-transition',
    component: img_transition_start_page,
  },
  iframe_start_page: {
    name: 'iframe',
    component: iframe_start_page,
  },
  seek_bar_start_page: {
    name: 'seek-bar',
    component: seek_bar_start_page,
  },
};
export default ExtendPageList;
