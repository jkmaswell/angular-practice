import {RegisterComponent} from './register.component';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UIRouterModule} from '@uirouter/angular';
import {APP_BASE_HREF} from '@angular/common';
import {StateService} from '@uirouter/angular';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UserService} from '../../core/service/user/user.service';
import {of} from 'rxjs/observable/of';

describe('LoginComponent', () => {

  let comp: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let stateServiceMock: StateService;
  let userServiceMock: UserService;

  const stateServiceStub = {
    go: () => {
      return Promise.resolve();
    }
  };

  const userServiceStub = {
    createUser: () => {
      return of({});
    },
    loginUser: () => {
      return of({});
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        UIRouterModule.forRoot(),
        TranslateModule.forRoot(),
        FormsModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: StateService, useValue: stateServiceStub},
        {provide: UserService, useValue: userServiceStub}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(RegisterComponent);
    comp = fixture.componentInstance;
    stateServiceMock = TestBed.get(StateService);
    userServiceMock = TestBed.get(UserService);

  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('goToLogin() should call state service', () => {
    spyOn(stateServiceMock, 'go').and.callThrough();
    comp.goToLogin();
    fixture.detectChanges();
    expect(stateServiceMock.go).toHaveBeenCalled();
  });

  it('register() should call state service', () => {
    const createResponse = {name: 'user'};
    const loginResponse = {};
    spyOn(stateServiceMock, 'go').and.callThrough();
    spyOn(userServiceMock, 'createUser').and.returnValue(of(createResponse));
    spyOn(userServiceMock, 'loginUser').and.returnValue(of(loginResponse));
    comp.register();
    expect(userServiceMock.createUser).toHaveBeenCalled();
    expect(stateServiceMock.go).toHaveBeenCalled();
  });
});
