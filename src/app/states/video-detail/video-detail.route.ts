import {VideoDetailComponent} from './video-detail.component';
import {StateService, Transition} from '@uirouter/angular';
import {VideoService} from '../../core/service/video/video.service';
import {UserService} from '../../core/service/user/user.service';

export const state = {
  name: 'main.detail',
  url: '/video/:videoId',
  views: {
    'content@': {
      component: VideoDetailComponent
    }
  },
  params: {
    videoId: null
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
      token: 'video',
      deps: [Transition, VideoService],
      resolveFn: (transition: Transition, videoService: VideoService) => {
        const params = transition.params();
        return videoService.getVideoDetail(params.videoId).toPromise();
      }
    },
    {
      token: 'comments',
      deps: [Transition, VideoService],
      resolveFn: (transition: Transition, videoService: VideoService) => {
        const params = transition.params();
        return videoService.getVideoComments(params.videoId).toPromise();
      }
    }
  ]
};
