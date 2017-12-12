import {Injectable} from '@angular/core';
import {CategoryResource} from '../../resource/category/category.resource';
import {Category} from '../../model/category/category.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  constructor(private categoryResource: CategoryResource) {
  }

  getAllCategories(): Observable<Category[]> {
    return this.categoryResource.getAllCategories();
  }
}
