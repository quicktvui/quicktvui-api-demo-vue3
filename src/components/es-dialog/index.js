import es_dialog_start_page from './es-dialog-start-page';
import es_dialog_style_page from './es-dialog-style-page';
import {ESRouteType} from "@extscreen/es3-router";

const ESPageDialogList = {
  es_dialog_start_page: {
    name: "使用初探",
    component: es_dialog_start_page,
    type: ESRouteType.ES_ROUTE_TYPE_DIALOG
  },
  es_dialog_style_page: {
    name: "弹窗样式",
    component: es_dialog_style_page,
    type: ESRouteType.ES_ROUTE_TYPE_DIALOG
  },
};
export default ESPageDialogList;
