import {NavComponent} from './commons/component/nav/nav.component';
import {HeaderComponent} from './commons/component/header/header.component';

export const state = {
  name: 'main',
  abstract: true,
  views: {
    'nav@': {
      component: NavComponent
    },
    'header@': {
      component: HeaderComponent
    }
  }
};
