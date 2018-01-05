import {StateService, UIRouter} from '@uirouter/angular';
import {Injector} from '@angular/core';
import {UserService} from '../core/service/user/user.service';

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  const criteria = {entering: (state) => state.data && state.data.authorization};
  router.transitionService.onBefore(criteria, requireAuthentication);

  router.urlService.rules.otherwise({state: 'login'});
}

function requireAuthentication(transition) {
  const $state = transition.router.stateService;
  const authSvc = transition.injector().get(UserService);
  return authSvc.getUser().toPromise().then(currentUser => {
    if (transition.targetState().$state().data.authorization === 'logged' && !currentUser) {
      return $state.target('login');
    } else if (transition.targetState().$state().data.authorization === 'notLogged' && currentUser) {
      return $state.target('main.dashboard');
    }
  });
}