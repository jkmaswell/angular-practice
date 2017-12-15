import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../core/model/video/video.model';
import {Comment} from '../../core/model/comment/comment.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() video: Video;
  @Input() comments: Comment;

  constructor() {
  }

  ngOnInit() {
    console.log(this.comments);
  }

}
