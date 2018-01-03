import {NavComponent} from './nav.component';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UIRouterModule} from '@uirouter/angular';
import {APP_BASE_HREF} from '@angular/common';
import {StateService} from '@uirouter/angular';
import {CategoryService} from '../../../core/service/category/category.service';
import {UserService} from '../../../core/service/user/user.service';
import {of} from 'rxjs/observable/of';

describe('NavComponent', () => {

  let comp: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let stateServiceMock: StateService;
  let categoryServiceMock: CategoryService;
  let userServiceMock: UserService;

  const stateServiceStub = {
    go: () => {
      return Promise.resolve();
    }
  };

  const categoryServiceStub = {
    getAllCategories: () => {
      return of({});
    }
  };
  const userServiceStub = {
    getUser: () => {
      return of({});
    },
    logoutUser: () => {
      return of({});
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [
        UIRouterModule.forRoot(),
        TranslateModule.forRoot()
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: StateService, useValue: stateServiceStub},
        {provide: CategoryService, useValue: categoryServiceStub},
        {provide: UserService, useValue: userServiceStub}
      ]
    });

    fixture = TestBed.createComponent(NavComponent);
    comp = fixture.componentInstance;
    stateServiceMock = TestBed.get(StateService);
    categoryServiceMock = TestBed.get(CategoryService);
    userServiceMock = TestBed.get(UserService);

  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('logout() should set a query and call state service', () => {
    spyOn(stateServiceMock, 'go').and.callThrough();
    spyOn(userServiceMock, 'logoutUser').and.callThrough();
    comp.logout();
    expect(userServiceMock.logoutUser).toHaveBeenCalled();
    expect(stateServiceMock.go).toHaveBeenCalled();
  });

  it('loadInitialData() should get all categories', () => {
    const categoryResponse = [{name: 'cat1'}];
    const userResponse = {name: 'user'};
    spyOn(categoryServiceMock, 'getAllCategories').and.returnValue(of(categoryResponse));
    spyOn(userServiceMock, 'getUser').and.returnValue(of(userResponse));
    comp.loadInitialData();
    expect(categoryServiceMock.getAllCategories).toHaveBeenCalled();
    expect(userServiceMock.getUser).toHaveBeenCalled();
  });
});
