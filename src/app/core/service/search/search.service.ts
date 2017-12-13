import {Injectable} from '@angular/core';
import {SearchResource} from '../../resource/search/search.resource';
import {Video} from '../../model/video/video.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SearchService {

  constructor(private searchResource: SearchResource) {
  }

  searchVideos(page?: string, perPage?: string, query?: string): Observable<Video[]> {
    return this.searchResource.searchVideos(page, perPage, query);
  }

}
