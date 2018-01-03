import {HeaderComponent} from './header.component';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UIRouterModule} from '@uirouter/angular';
import {APP_BASE_HREF} from '@angular/common';
import {StateService} from '@uirouter/angular';

describe('HeaderComponent', () => {

  let comp: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let stateService: StateService;

  const stateServiceStub = {
    go: () => {
      return Promise.resolve();
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        UIRouterModule.forRoot(),
        TranslateModule.forRoot()
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: StateService, useValue: stateServiceStub}
      ]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.componentInstance;
    stateService = TestBed.get(StateService);

  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('search() should set a query and call state service', () => {
    spyOn(stateService, 'go').and.callThrough();
    const query = 'queryMock';
    comp.search(query);
    fixture.detectChanges();
    expect(stateService.go).toHaveBeenCalled();
  });
});
