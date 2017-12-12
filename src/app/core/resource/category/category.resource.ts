import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VimeoApiKey} from '../../core.constants';
import {Categories, CategoryVideos, CategoryVideo} from '../../model/category/category.model';

// Import RxJs required methods
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryResource {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getAllCategories(): Observable<Categories[]> {
    return this.http.get<any>(VimeoApiKey.vimeoBaseUrl + 'categories')
      .map(response => {
        const categories: Categories[] = [];
        response.data.forEach(dto => {
          categories.push(new Categories(dto.uri, dto.name, dto.link));
        });
        return categories;
      });
  }

  getCategoryVideos(categoryId: string, page?: string, perPage?: string): Observable<CategoryVideos[]> {
    return this.http.get<any>(VimeoApiKey.vimeoBaseUrl + 'categories/' + categoryId + '/videos?page=' + page + '&per_page=' + perPage)
      .map(response => {
        const categories: CategoryVideos[] = [];
        response.data.forEach(dto => {
          categories.push(new CategoryVideos(dto.uri, dto.name, dto.description, dto.pictures));
        });
        return categories;
      });
  }

  getVideoDetail(videoId: string): Observable<CategoryVideo> {
    return this.http.get<any>(VimeoApiKey.vimeoBaseUrl + 'videos/' + videoId)
      .map(response => {
        return new CategoryVideo(
          response.name,
          response.description,
          response.embed.html,
          response.stats,
          response.metadata,
          response.user,
          response.release_time);
      });
  }

}
