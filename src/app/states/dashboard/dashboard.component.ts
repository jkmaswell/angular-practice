import {Component, Input, OnInit} from '@angular/core';
import {CategoryVideos} from '../../core/model/category/category.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() categoryVideos: CategoryVideos[];

  constructor() {
  }

  ngOnInit() {
  }
}
