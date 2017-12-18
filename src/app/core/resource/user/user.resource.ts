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
    if (0 < users.length) {
      const duplicateUser = users.filter(userFiltered => {
        return userFiltered.email === newUser.email;
      }).length;
      if (duplicateUser) {
        return (Observable.throw(new Error('User Duplicated')));
      }
    } else {
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      return (Observable.of(newUser));
    }
  }

  getUser(): Observable<User> {
    const currentUser: User = JSON.parse(localStorage.getItem('currentUser')) || undefined;
    return (Observable.of(currentUser));
  }

  loginUser(user: User): Observable<User> {
    const users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser: User = user;
    if (0 < users.length) {
      for (let i = 0; i < users.length; i++) {
        const userFiltered = users[i];
        if (userFiltered.email === currentUser.email && userFiltered.password === currentUser.password) {
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          return (Observable.of(currentUser));
        }
      }
      return (Observable.throw(new Error('Email or Password Not Valid')));
    } else {
      return (Observable.throw(new Error('User Not Exist')));
    }
  }

}
