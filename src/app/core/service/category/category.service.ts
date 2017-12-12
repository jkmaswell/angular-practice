import {Injectable} from '@angular/core';
import {CategoryResource} from '../../resource/category/category.resource';
import {Categories, CategoryVideos, CategoryVideo} from '../../model/category/category.model';
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

  getVideoDetail(videoId: string): Observable<CategoryVideo> {
    return this.categoryResource.getVideoDetail(videoId);
  }
}
