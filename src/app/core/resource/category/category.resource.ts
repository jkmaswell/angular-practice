import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {VimeoApiKey} from '../../core.constants';
import {Category} from '../../model/category/category.model';

// Import RxJs required methods
import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class CategoryResource {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getAllCategories(): Observable<any> {
    return this.http.get(VimeoApiKey.vimeoBaseUrl + 'categories');
  }

}
