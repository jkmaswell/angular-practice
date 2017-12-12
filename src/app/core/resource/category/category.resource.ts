import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VimeoApiKey} from '../../core.constants';
import {Category} from '../../model/category/category.model';

// Import RxJs required methods
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryResource {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<any>(VimeoApiKey.vimeoBaseUrl + 'categories')
      .map(response => {
        const categories: Category[] = [];
        response.data.forEach(dto => {
          categories.push(new Category(dto.uri, dto.name, dto.link));
        });
        return categories;
      });
  }
}
