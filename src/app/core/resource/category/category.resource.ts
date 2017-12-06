import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VimeoApiKey} from '../../core.constants';
import {Categories} from '../../model/category/category.model';
import {CategoryVideos} from '../../model/category/category.model';

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

}
