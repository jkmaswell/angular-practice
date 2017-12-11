import {Component, Input, OnInit} from '@angular/core';
import {CategoryVideos} from '../../core/model/category/category.model';
import {CategoryService} from '../../core/service/category/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() categoryVideos: CategoryVideos[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  getCategoryVideos(categoryId: string, page: string, perPage: string) {
    this.categoryService.getCategoryVideos(categoryId, page, perPage)
      .subscribe((categoryVideos: CategoryVideos[]) => {
        this.categoryVideos = categoryVideos;
      });
  }
}
