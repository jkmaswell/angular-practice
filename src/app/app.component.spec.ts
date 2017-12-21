import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {LoginComponent} from './states/login/login.component';
import {RegisterComponent} from './states/register/register.component';
import {DashboardComponent} from './states/dashboard/dashboard.component';
import {NavComponent} from './commons/component/nav/nav.component';
import {DetailComponent} from './states/detail/detail.component';
import {HeaderComponent} from './commons/component/header/header.component';
import {STATES} from './states/states';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {MomentModule} from 'angular2-moment';
import {BrowserModule} from '@angular/platform-browser';
import {CoreModule} from './core/core.module';
import {uiRouterConfigFn} from './config/router.config';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UIRouterModule} from '@uirouter/angular';
import {translateLoader} from './config/multi-translate-http-loader';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from "@angular/common";
import {GeneralInterceptor} from "./app.interceptor";

fdescribe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashboardComponent,
        NavComponent,
        DetailComponent,
        HeaderComponent,
        RegisterComponent,
        LoginComponent
      ],
      imports: [
        BrowserModule,
        UIRouterModule.forRoot({
          states: STATES,
          useHash: false,
          config: uiRouterConfigFn
        }),
        CoreModule,
        MomentModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: translateLoader,
            deps: [HttpClient]
          }
        }),
        NgbModule.forRoot()
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: GeneralInterceptor,
          multi: true
        },
        {
          provide: APP_BASE_HREF, useValue: '/'
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
