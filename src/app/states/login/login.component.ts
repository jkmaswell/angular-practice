import {Component} from '@angular/core';
import {UserService} from '../../core/service/user/user.service';
import {StateService} from '@uirouter/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: any = {};

  constructor(private userService: UserService,
              private stateService: StateService) {
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
