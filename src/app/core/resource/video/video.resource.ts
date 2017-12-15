import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VimeoApiKey} from '../../core.constants';
import {Video} from '../../model/video/video.model';
import {Comment} from '../../model/comment/comment.model';
import {DomSanitizer} from '@angular/platform-browser';

// Import RxJs required methods
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoResource {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.http = http;
  }

  getVideosByCategory(categoryId: string, page?: string, perPage?: string): Observable<Video[]> {
    return this.http.get<any>(VimeoApiKey.vimeoBaseUrl + 'categories/' + categoryId + '/videos?page=' + page + '&per_page=' + perPage)
      .map(response => {
        const categoryVideos: Video[] = [];
        response.data.forEach(dto => {
          categoryVideos.push(this.dtoToVideo(dto));
        });
        return categoryVideos;
      });
  }

  getVideoDetail(videoId: string): Observable<Video> {
    return this.http.get<any>(VimeoApiKey.vimeoBaseUrl + 'videos/' + videoId)
      .map(response => {
        return this.dtoToVideo(response);
      });
  }

  getVideoComments(videoId: string): Observable<Comment[]> {
    return this.http.get<any>(VimeoApiKey.vimeoBaseUrl + 'videos/' + videoId + '/comments')
      .map(response => {
        const videoComments: Comment[] = [];
        response.data.forEach(dto => {
          videoComments.push(new Comment(dto.text, dto.created_on, dto.user));
        });
        return videoComments;
      });
  }

  private dtoToVideo(dto: any): Video {
    return new Video(
      dto.name,
      dto.description,
      this.sanitizer.bypassSecurityTrustHtml(dto.embed.html),
      dto.stats,
      dto.metadata,
      dto.user,
      dto.release_time,
      dto.uri,
      dto.pictures);
  }

}
