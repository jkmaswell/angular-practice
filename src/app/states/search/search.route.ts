import {DashboardComponent} from '../dashboard/dashboard.component';
import {Transition} from '@uirouter/angular';
import {SearchService} from '../../core/service/search/search.service';

export const state = {
  name: 'main.search',
  url: '/search?page&perPage&query',
  views: {
    'content@': {
      component: DashboardComponent
    }
  },
  params: {
    page: '1',
    perPage: '12',
    query: 'animation'
  },
  resolve: [
    {
      token: 'categoryVideos',
      deps: [Transition, SearchService],
      resolveFn: (transition: Transition, searchService: SearchService) => {
        const params = transition.params();
        return searchService.searchVideos(params.page, params.perPage, params.query).toPromise();
      }
    }
  ]
};
