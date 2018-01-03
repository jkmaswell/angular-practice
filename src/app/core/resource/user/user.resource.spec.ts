import {UserResource} from './user.resource';
import {TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {User} from '../../model/user/user.model';

describe('UserResource', () => {

  let userResourceMock: UserResource;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        UserResource
      ]
    });

    userResourceMock = TestBed.get(UserResource);
    httpMock = TestBed.get(HttpTestingController);

  });

  it('should create', () => {
    expect(userResourceMock).toBeTruthy();
  });

  it('should call createUser', () => {
    const userMock = new User('emailSome', 'passSome');
    const store = {users: '[]'};

    spyOn(localStorage, 'getItem').and.callFake((users: string): String => {
      return store[users];
    });
    spyOn(localStorage, 'setItem').and.callThrough();

    userResourceMock.createUser(userMock).subscribe(() => {
      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });

  it('should call loginUser', () => {
    const userMock = new User('email', 'pass');
    const store = {users: '[{"email": "email", "password": "pass"}]'};

    spyOn(localStorage, 'getItem').and.callFake((users: string): String => {
      return store[users];
    });
    spyOn(localStorage, 'setItem').and.callThrough();

    userResourceMock.loginUser(userMock).subscribe(() => {
      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });

  it('should call getUser', () => {
    const store = {currentUser: '[{"email": "email", "password": "pass"}]'};

    spyOn(localStorage, 'getItem').and.callFake((currentUser: string): String => {
      return store[currentUser];
    });
    userResourceMock.getUser().subscribe();
    expect(userResourceMock.getUser).toBeTruthy();
  });

  it('should call logoutUser', () => {
    userResourceMock.logoutUser().subscribe();
    expect(userResourceMock.logoutUser).toBeTruthy();
  });

});
