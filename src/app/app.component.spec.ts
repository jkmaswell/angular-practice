import {AppComponent} from './app.component';
import {
  MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateModule, TranslateParser, TranslateService
} from '@ngx-translate/core';
import {DebugElement, Injector} from '@angular/core';
import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {UIRouterModule} from "@uirouter/angular";
import {APP_BASE_HREF} from "@angular/common";

class TranslateServiceMock extends TranslateService {

}

fdescribe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

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

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    // de = fixture.debugElement.query(By.css('h1'));
    // el = de.nativeElement;
  });

  afterEach(() => {
    // translate = undefined;
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
});