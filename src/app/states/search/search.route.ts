import {DashboardComponent} from '../dashboard/dashboard.component';
import {StateService, Transition} from '@uirouter/angular';
import {VideoService} from '../../core/service/video/video.service';
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
      deps: [Transition, VideoService],
      resolveFn: (transition: Transition, videoService: VideoService) => {
        const params = transition.params();
        return videoService.searchVideos(params.page, params.perPage, params.query).toPromise();
      }
    }
  ]
};
