import {Injectable} from '@angular/core';
import {CategoryResource} from '../../resource/category/category.resource';
import {Categories} from '../../model/category/category.model';
import {CategoryVideos} from '../../model/category/category.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  constructor(private categoryResource: CategoryResource) {
  }

  getAllCategories(): Observable<Categories[]> {
    return this.categoryResource.getAllCategories();
  }

  getCategoryVideos(categoryId: string, page?: string, perPage?: string): Observable<CategoryVideos[]> {
    return this.categoryResource.getCategoryVideos(categoryId, page, perPage);
  }
}
