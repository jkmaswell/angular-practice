import {Component, OnInit} from '@angular/core';
import {Categories} from '../../../core/model/category/category.model';
import {CategoryService} from '../../../core/service/category/category.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  private categories: Categories[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.loadInitialData();
  }

  loadInitialData() {
    this.categoryService.getAllCategories()
      .subscribe((categories: Categories[]) => {
        this.categories = categories;
      });
  }

}
