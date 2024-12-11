import EsUlHorizontal from "./index.vue";
import EsUlVertical from "./ul-vertical.vue";
import EsUlGrid from "./ul-grid.vue";

export default {
  es_ul_horizontal: {
    name: 'ul-纵向列表',
    component: EsUlHorizontal,
  },
  es_ul_vertical: {
    name: 'ul-水平列表',
    component: EsUlVertical,
  },
  es_ul_grid: {
    name: 'ul-网格列表',
    component: EsUlGrid,
  }
}