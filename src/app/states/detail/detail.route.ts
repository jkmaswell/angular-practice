import {DetailComponent} from './detail.component';
import {Transition} from '@uirouter/angular';
import {VideoService} from '../../core/service/video/video.service';

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
      deps: [Transition, VideoService],
      resolveFn: (transition: Transition, videoService: VideoService) => {
        const params = transition.params();
        return videoService.getVideoDetail(params.videoId).toPromise();
      }
    }
  ]
};