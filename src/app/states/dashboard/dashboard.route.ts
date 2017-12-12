import {DashboardComponent} from './dashboard.component';
import {Transition} from '@uirouter/angular';
import {CategoryService} from '../../core/service/category/category.service';

export const state = {
  name: 'main.dashboard',
  url: '/category/:categoryId?page&perPage',
  views: {
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
