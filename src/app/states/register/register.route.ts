import {RegisterComponent} from './register.component';
import {UserService} from '../../core/service/user/user.service';
import {StateService} from '@uirouter/angular';

export const state = {
  name: 'register',
  url: '/register',
  views: {
    'content@': {
      component: RegisterComponent
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
