import {Component, OnInit} from '@angular/core';
import {StateService} from '@uirouter/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private stateService: StateService) {
  }

  ngOnInit() {
  }

  search(query: string): void {
    query = query.trim();
    this.stateService.go('main.search', {query: query});
  }

}
