import {Component, OnInit} from '@angular/core';
import {StateService} from '@uirouter/angular';
import {UserService} from '../../../core/service/user/user.service';
import {User} from '../../../core/model/user/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: User;

  constructor(private stateService: StateService,
              private userService: UserService) {
    this.stateService = stateService;
    this.userService = userService;
  }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      this.currentUser = user;
    });
  }

  search(query: string): void {
    query = query.trim();
    this.stateService.go('main.search', {query: query});
  }

  logout(): void {
    this.userService.logoutUser().subscribe(response => {
      alert(response);
      this.stateService.go('login');
    });
  }

}
