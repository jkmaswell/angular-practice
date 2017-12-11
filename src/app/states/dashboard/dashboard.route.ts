import {DashboardComponent} from './dashboard.component';
import {NavComponent} from '../../commons/component/nav/nav.component';
import {Transition} from '@uirouter/angular';
import {CategoryService} from '../../core/service/category/category.service';
import {Promise} from 'q';

export const state = {
  name: 'dashboard',
  url: '/:categoryId?page&perPage',
  views: {
    'nav@': {
      component: NavComponent
    },
    'content@': {
      component: DashboardComponent
    }
  },
  params: {
    categoryId: 'animation',
    page: '1',
    perPage: '12'
  },
  resolve: [
    {
      token: 'categoryVideos',
      deps: [Transition, CategoryService],
      resolveFn: (transition: Transition, categoryService: CategoryService) => {
        const params = transition.params();
        return categoryService.getCategoryVideos(params.categoryId, params.page, params.perPage).toPromise();
      }
    }
  ]
};
