import {AppComponent} from './app.component';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UIRouterModule} from '@uirouter/angular';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent], // declare the test component
      imports: [
        UIRouterModule.forRoot(),
        TranslateModule.forRoot()
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    });

    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance;

  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
});
