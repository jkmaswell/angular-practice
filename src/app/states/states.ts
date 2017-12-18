import {state as MainRoute} from '../app.route';
import {state as DashboardRoute} from './dashboard/dashboard.route';
import {state as UsersRoute} from './users/users.route';
import {state as DetailRoute} from './detail/detail.route';
import {state as SearchRoute} from './search/search.route';
import {state as RegisterRoute} from './register/register.route';
import {state as LoginRoute} from './login/login.route';

export const STATES = [MainRoute, DashboardRoute, DetailRoute, SearchRoute, UsersRoute, RegisterRoute, LoginRoute];
