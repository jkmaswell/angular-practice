import {LoginComponent} from './login.component';
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

  let comp: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let stateServiceMock: StateService;
  let userServiceMock: UserService;

  const stateServiceStub = {
    go: () => {
      return Promise.resolve();
    }
  };

  const userServiceStub = {
    loginUser: () => {
      return of({});
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
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

    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.componentInstance;
    stateServiceMock = TestBed.get(StateService);
    userServiceMock = TestBed.get(UserService);

  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('goToRegister() should call state service', () => {
    spyOn(stateServiceMock, 'go').and.callThrough();
    comp.goToRegister();
    fixture.detectChanges();
    expect(stateServiceMock.go).toHaveBeenCalled();
  });

  it('login() should call state service', () => {
    const loginResponse = {};
    spyOn(stateServiceMock, 'go').and.callThrough();
    spyOn(userServiceMock, 'loginUser').and.returnValue(of(loginResponse));
    comp.login();
    expect(userServiceMock.loginUser).toHaveBeenCalled();
    expect(stateServiceMock.go).toHaveBeenCalled();
  });
});
