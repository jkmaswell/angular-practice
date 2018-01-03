import {Component, Input} from '@angular/core';
import {Video} from '../../core/model/video/video.model';
import {Comment} from '../../core/model/comment/comment.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  @Input() video: Video;
  @Input() comments: Comment;

  constructor() {
  }

}
