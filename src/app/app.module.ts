import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UIRouterModule} from '@uirouter/angular';
import {uiRouterConfigFn} from './config/router.config';
import {AppComponent} from './app.component';
import {STATES} from './states/states';
import {DashboardComponent} from './states/dashboard/dashboard.component';
import {UsersComponent} from './states/users/users.component';
import {CoreModule} from './core/core.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {GeneralInterceptor} from './app.interceptor';
import {NavComponent} from './commons/component/nav/nav.component';
import {DetailComponent} from './states/detail/detail.component';
import {HeaderComponent} from './commons/component/header/header.component';
import {MomentModule} from 'angular2-moment';
import {RegisterComponent} from './states/register/register.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './states/login/login.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {translateLoader} from './config/multi-translate-http-loader';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
