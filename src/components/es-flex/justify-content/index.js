import es_flex_justify_content_center_page from "./es-flex-center-page";
import es_flex_justify_content_start_page from "./es-flex-start-page";
import es_flex_justify_content_end_page from "./es-flex-end-page";
import es_flex_justify_content_around_page from "./es-flex-around-page";
import es_flex_justify_content_between_page from "./es-flex-between-page";
import es_flex_justify_content_evenly_page from "./es-flex-evenly-page";

const ESFlexJustifyContentPageList = {
  es_flex_justify_content_center_page: {
    name: 'center',
    component: es_flex_justify_content_center_page,
  },
  es_flex_justify_content_start_page: {
    name: 'flex-start',
    component: es_flex_justify_content_start_page,
  },
  es_flex_justify_content_end_page: {
    name: 'flex-end',
    component: es_flex_justify_content_end_page,
  },
  es_flex_justify_content_around_page: {
    name: 'space-around',
    component: es_flex_justify_content_around_page,
  },
  es_flex_justify_content_between_page: {
    name: 'space-between',
    component: es_flex_justify_content_between_page,
  },
  es_flex_justify_content_evenly_page: {
    name: 'space-evenly',
    component: es_flex_justify_content_evenly_page,
  },
};
export default ESFlexJustifyContentPageList;




