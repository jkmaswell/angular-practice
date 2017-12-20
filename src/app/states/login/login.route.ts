import {LoginComponent} from './login.component';
import {StateService} from '@uirouter/angular';
import {UserService} from '../../core/service/user/user.service';

export const state = {
  name: 'login',
  url: '/login',
  views: {
    'content@': {
      component: LoginComponent
    }
  },
  resolve: [
    {
      token: 'currentUser',
      deps: [UserService, StateService],
      resolveFn: (userService: UserService, stateService: StateService) => {
        return userService.getUser().toPromise().then(currentUser => {
          if (currentUser) {
            stateService.go('main.dashboard');
          }
        });
      }
    }
  ]
};
