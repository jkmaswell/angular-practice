import {UserService} from './user.service';
import {UserResource} from '../../resource/user/user.resource';
import {TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {of} from 'rxjs/observable/of';
import {User} from '../../model/user/user.model';

describe('UserService', () => {

  let userServiceMock: UserService;
  let httpMock: HttpTestingController;
  let userResourceMock: UserResource;

  const userResourceStub = {
    createUser: () => {
      return of({});
    },
    getUser: () => {
      return of({});
    },
    loginUser: () => {
      return of({});
    },
    logoutUser: () => {
      return of({});
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: UserResource, useValue: userResourceStub},
        UserService
      ]
    });

    userServiceMock = TestBed.get(UserService);
    httpMock = TestBed.get(HttpTestingController);
    userResourceMock = TestBed.get(UserResource);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(userServiceMock).toBeTruthy();
  });

  it('createUser() should call user resource', () => {
    const createResponse = {};
    const userMock = new User('emailSome', 'passSome');
    spyOn(userResourceMock, 'createUser').and.returnValue(of(createResponse));
    userServiceMock.createUser(userMock);
    expect(userResourceMock.createUser).toHaveBeenCalled();
  });

  it('loginUser() should call user resource', () => {
    const loginResponse = {};
    const userMock = new User('emailSome', 'passSome');
    spyOn(userResourceMock, 'loginUser').and.returnValue(of(loginResponse));
    userServiceMock.loginUser(userMock);
    expect(userResourceMock.loginUser).toHaveBeenCalled();
  });

  it('getUser() should call user resource', () => {
    const userResponse = {};
    spyOn(userResourceMock, 'getUser').and.returnValue(of(userResponse));
    userServiceMock.getUser();
    expect(userResourceMock.getUser).toHaveBeenCalled();
  });

  it('logoutUser() should call user resource', () => {
    const userResponse = {};
    spyOn(userResourceMock, 'logoutUser').and.returnValue(of(userResponse));
    userServiceMock.logoutUser();
    expect(userResourceMock.logoutUser).toHaveBeenCalled();
  });

});
