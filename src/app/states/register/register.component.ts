import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/service/user/user.service';
import {StateService} from '@uirouter/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: any = {};

  constructor(private userService: UserService,
              private stateService: StateService) {
    this.userService = userService;
    this.stateService = stateService;
  }

  ngOnInit() {
  }

  register() {
    this.userService.createUser(this.user).subscribe(() => {
      this.stateService.go('main.dashboard');
    });
  }

}
