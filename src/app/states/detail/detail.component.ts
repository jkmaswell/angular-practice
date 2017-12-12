import {Component, Input, OnInit} from '@angular/core';
import {CategoryVideo} from '../../core/model/category/category.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() categoryVideo: CategoryVideo;

  constructor() {
  }

  ngOnInit() {
  }

}
