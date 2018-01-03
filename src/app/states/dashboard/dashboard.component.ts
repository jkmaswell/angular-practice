import {Component, Input} from '@angular/core';
import {Video} from '../../core/model/video/video.model';
import {StateService, Transition} from '@uirouter/angular';
import {VimeoApiKey} from '../../core/core.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  page = '';
  maxSize;
  perPage;

  @Input() categoryVideos: Video[];
  @Input() totalVideos: any;

  constructor(private transition: Transition,
              private stateService: StateService) {
    this.page = transition.params().page;
    this.maxSize = VimeoApiKey.max_size;
    this.perPage = VimeoApiKey.per_page;
  }

  changePage() {
    this.stateService.go('.', {page: this.page});
  }

}
