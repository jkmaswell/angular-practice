import {Component} from '@angular/core';
import {CategoryResource} from './core/resource/category/category.resource';
import {Category} from './core/model/category/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'app';
  categories: any;

  constructor(private categoryResource: CategoryResource) {
    this.loadInitialData();
  }

  loadInitialData() {
    this.categoryResource.getAllCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  }
}
