import {Injectable} from '@angular/core';
import {User} from '../../model/user/user.model';
import {Observable} from 'rxjs/Observable';

// Import RxJS modules for "side effects".
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserResource {

  constructor() {
  }

  createUser(user: User): Observable<User> {
    const users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    const newUser: User = user;
    if (users) {
      const duplicateUser = users.filter(userFiltered => {
        return userFiltered.email === newUser.email;
      }).length;
      if (duplicateUser) {
        return (Observable.throw(new Error('User Duplicated')));
      }
    }
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return (Observable.of(newUser));
  }

}
