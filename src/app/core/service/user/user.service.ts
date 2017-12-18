import {Injectable} from '@angular/core';
import {UserResource} from '../../resource/user/user.resource';
import {User} from '../../model/user/user.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private userResource: UserResource) {
  }

  createUser(user: User): Observable<User> {
    return this.userResource.createUser(user);
  }

  getUser(): Observable<User> {
    return this.userResource.getUser();
  }

  loginUser(user: User): Observable<User> {
    return this.userResource.loginUser(user);
  }
}
