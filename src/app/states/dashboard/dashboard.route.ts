import {DashboardComponent} from './dashboard.component';
import {UsersComponent} from '../users/users.component';

export const state = {
  name: 'dashboard', url: '/', views: {
    'header@':{
      component: UsersComponent
    },
    'content@': {
      component: DashboardComponent
    }
  }
};
