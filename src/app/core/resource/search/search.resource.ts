import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VimeoApiKey} from '../../core.constants';
import {Video} from '../../model/video/video.model';
import {DomSanitizer} from '@angular/platform-browser';

// Import RxJs required methods
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchResource {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.http = http;
  }

  searchVideos(page?: string, perPage?: string, query?: string): Observable<Video[]> {
    return this.http.get<any>(VimeoApiKey.vimeoBaseUrl + '/videos?page=' + page + '&per_page=' + perPage + '&query=' + query)
      .map(response => {
        const searchVideos: Video[] = [];
        response.data.forEach(dto => {
          searchVideos.push(this.dtoToVideo(dto));
        });
        return searchVideos;
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
