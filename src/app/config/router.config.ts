import {UIRouter} from '@uirouter/angular';
import {Injector} from '@angular/core';
import {UserService} from '../core/service/user/user.service';

enum Auth {
  Yes = 'logged',
  No = 'notLogged'
}

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  const criteria = {entering: (state) => state.data && state.data.authorization};
  router.transitionService.onBefore(criteria, requireAuthentication);
  router.urlService.rules.otherwise({state: 'login'});
}

function requireAuthentication(transition) {
  const $state = transition.router.stateService;
  const authSvc = transition.injector().get(UserService);
  const stateData = transition.targetState().$state().data;
  return authSvc.getUser().toPromise().then(currentUser => {
    if (stateData.authorization === Auth.Yes && !currentUser) {
      return $state.target('login');
    } else if (stateData.authorization === Auth.No && currentUser) {
      return $state.target('main.dashboard');
    }
  });
}