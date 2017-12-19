import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/service/user/user.service';
import {StateService} from '@uirouter/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(private userService: UserService,
              private stateService: StateService) {
    this.userService = userService;
    this.stateService = stateService;
  }

  ngOnInit() {
  }

  login() {
    this.userService.loginUser(this.user).subscribe(() => {
      alert('User logged successfully!');
      this.stateService.go('main.dashboard');
    }, error => {
      alert(error);
    });
  }

  goToRegister() {
    this.stateService.go('register');
  }

}
