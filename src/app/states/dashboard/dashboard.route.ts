import {DashboardComponent} from './dashboard.component';
import {Transition} from '@uirouter/angular';
import {VideoService} from '../../core/service/video/video.service';
import {UserService} from '../../core/service/user/user.service';
import {StateService} from '@uirouter/angular';

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
      token: 'isLogged',
      deps: [UserService, StateService],
      resolveFn: (userService: UserService, stateService: StateService) => {
        return userService.getUser().toPromise().then(response => {
          if (!response) {
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
        return videoService.getVideosByCategory(params.categoryId, params.page, params.perPage).toPromise();
      }
    }
  ]
};
