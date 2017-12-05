import {Component} from '@angular/core';
import {CategoryResource} from './core/resource/category/category.resource';

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
      .subscribe(categories => this.categories = categories);
  }
}
