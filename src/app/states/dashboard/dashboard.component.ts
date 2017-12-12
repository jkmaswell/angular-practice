import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../core/model/video/video.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() categoryVideos: Video[];

  constructor() {
  }

  ngOnInit() {
  }
}
