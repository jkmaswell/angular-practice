import {DetailComponent} from './detail.component';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UIRouterModule} from '@uirouter/angular';
import {APP_BASE_HREF} from '@angular/common';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MomentModule} from 'angular2-moment';

describe('DetailComponent', () => {

  let comp: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      imports: [
        UIRouterModule.forRoot(),
        TranslateModule.forRoot(),
        MomentModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(DetailComponent);
    comp = fixture.componentInstance;

  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

});
