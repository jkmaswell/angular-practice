import {DashboardComponent} from './dashboard.component';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UIRouterModule} from '@uirouter/angular';
import {APP_BASE_HREF} from '@angular/common';
import {StateService, Transition} from '@uirouter/angular';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('DashboardComponent', () => {

  let comp: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let stateService: StateService;

  const stateServiceStub = {
    go: () => {
      return Promise.resolve();
    }
  };

  const transitionStub = {
    params: () => {
      return {page: '1'};
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        UIRouterModule.forRoot(),
        TranslateModule.forRoot()
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: StateService, useValue: stateServiceStub},
        {provide: Transition, useValue: transitionStub}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(DashboardComponent);
    comp = fixture.componentInstance;
    stateService = TestBed.get(StateService);

  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('changePage() should call state service', () => {
    spyOn(stateService, 'go').and.callThrough();
    comp.changePage();
    fixture.detectChanges();
    expect(stateService.go).toHaveBeenCalled();
  });
});
