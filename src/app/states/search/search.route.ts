import {DashboardComponent} from '../dashboard/dashboard.component';
import {StateService, Transition} from '@uirouter/angular';
import {SearchService} from '../../core/service/search/search.service';
import {UserService} from '../../core/service/user/user.service';

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
      token: 'currentUser',
      deps: [UserService, StateService],
      resolveFn: (userService: UserService, stateService: StateService) => {
        return userService.getUser().toPromise().then(currentUser => {
          if (!currentUser) {
            stateService.go('login');
          }
        });
      }
    },
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
