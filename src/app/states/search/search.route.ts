import {DashboardComponent} from '../dashboard/dashboard.component';
import {Transition} from '@uirouter/angular';
import {VideoService} from '../../core/service/video/video.service';

export const state = {
  name: 'main.search',
  url: '/search?page&perPage&query',
  data: {
    authorization: 'logged'
  },
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
      deps: [Transition, VideoService],
      resolveFn: (transition: Transition, videoService: VideoService) => {
        const params = transition.params();
        return videoService.searchVideos(params.page, params.perPage, params.query).toPromise();
      }
    }
  ]
};
