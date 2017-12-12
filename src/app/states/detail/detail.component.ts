import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../core/model/video/video.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() categoryVideo: Video;

  constructor() {
  }

  ngOnInit() {
  }

}
