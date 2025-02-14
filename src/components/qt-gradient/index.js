import qt_gradient_start_page from './qt-gradient-start-page';
import qt_gradient_type_page from './qt-gradient-type-page';
import qt_gradient_shape_page from './qt-gradient-shape-page';
import qt_gradient_orientation_page from './qt-gradient-orientation-page';
import qt_gradient_corner_radius_page from './qt-gradient-corner-radius-page';
import qt_gradient_corner_radii4_page from './qt-gradient-corner-radii4-page';

const QTGradientPageList = {
  qt_gradient_start_page: {
    name: '使用初探',
    component: qt_gradient_start_page,
  },
  qt_gradient_type_page: {
    name: 'GradientType',
    component: qt_gradient_type_page,
  },
  qt_gradient_shape_page: {
    name: 'GradientShape',
    component: qt_gradient_shape_page,
  },
  qt_gradient_orientation_page: {
    name: 'GradientOrientation',
    component: qt_gradient_orientation_page,
  },
  qt_gradient_corner_radius_page: {
    name: 'CornerRadius',
    component: qt_gradient_corner_radius_page,
  },
  qt_gradient_corner_radii4_page: {
    name: 'cornerRadii4',
    component: qt_gradient_corner_radii4_page,
  }
};
export default QTGradientPageList;
