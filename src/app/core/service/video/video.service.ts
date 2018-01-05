import {Injectable} from '@angular/core';
import {VideoResource} from '../../resource/video/video.resource';
import {Video} from '../../model/video/video.model';
import {Observable} from 'rxjs/Observable';
import {Comment} from '../../model/comment/comment.model';

@Injectable()
export class VideoService {

  constructor(private videoResource: VideoResource) {
  }

  getTotalVideosByCategory(categoryId: string, page?: number, perPage?: number): Observable<any> {
    return this.videoResource.getTotalVideosByCategory(categoryId, page, perPage);
  }

  getVideosByCategory(categoryId: string, page?: number, perPage?: number): Observable<Video[]> {
    return this.videoResource.getVideosByCategory(categoryId, page, perPage);
  }

  getVideoDetail(videoId: string): Observable<Video> {
    return this.videoResource.getVideoDetail(videoId);
  }

  getVideoComments(videoId: string): Observable<Comment[]> {
    return this.videoResource.getVideoComments(videoId);
  }

  searchVideos(page?: number, perPage?: number, query?: string): Observable<Video[]> {
    return this.videoResource.searchVideos(page, perPage, query);
  }
}
