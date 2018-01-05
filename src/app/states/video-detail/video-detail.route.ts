import {VideoDetailComponent} from './video-detail.component';
import {Transition} from '@uirouter/angular';
import {VideoService} from '../../core/service/video/video.service';

export const state = {
  name: 'main.detail',
  url: '/video/:videoId',
  data: {
    authorization: 'logged'
  },
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
