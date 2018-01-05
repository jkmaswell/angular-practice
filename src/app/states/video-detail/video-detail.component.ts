import {Component, Input} from '@angular/core';
import {Video} from '../../core/model/video/video.model';
import {Comment} from '../../core/model/comment/comment.model';

@Component({
  selector: 'app-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent {

  @Input() video: Video;
  @Input() comments: Comment;

  constructor() {
  }

}
