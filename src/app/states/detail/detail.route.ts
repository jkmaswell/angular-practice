import {DetailComponent} from './detail.component';
import {Transition} from '@uirouter/angular';
import {CategoryService} from '../../core/service/category/category.service';

export const state = {
  name: 'main.detail',
  url: '/video/:videoId',
  views: {
    'content@': {
      component: DetailComponent
    }
  },
  params: {
    videoId: null
  },
  resolve: [
    {
      token: 'categoryVideo',
      deps: [Transition, CategoryService],
      resolveFn: (transition: Transition, categoryService: CategoryService) => {
        const params = transition.params();
        return categoryService.getVideoDetail(params.videoId).toPromise();
      }
    }
  ]
};
