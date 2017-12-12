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
import { NavComponent } from './commons/component/nav/nav.component';
import { DetailComponent } from './states/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    NavComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
      states: STATES,
      useHash: false,
      config: uiRouterConfigFn
    }),
    CoreModule
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
