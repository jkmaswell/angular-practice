import {DashboardComponent} from './dashboard.component';
import {NavComponent} from '../../commons/component/nav/nav.component';
import {CategoryService} from '../../core/service/category/category.service';

export const state = {
  name: 'dashboard',
  url: '/:categoryId?page?perPage',
  views: {
    'nav@': {
      component: NavComponent
    },
    'content@': {
      component: DashboardComponent
    }
  },
  resolve: {
  }
};
