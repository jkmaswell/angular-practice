import {NavComponent} from './commons/component/nav/nav.component';

export const state = {
  name: 'main',
  abstract: true,
  views: {
    'nav@': {
      component: NavComponent
    }
  }
};
