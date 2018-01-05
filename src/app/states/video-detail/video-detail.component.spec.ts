import {VideoDetailComponent} from './video-detail.component';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UIRouterModule} from '@uirouter/angular';
import {APP_BASE_HREF} from '@angular/common';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MomentModule} from 'angular2-moment';

describe('VideoDetailComponent', () => {

  let comp: VideoDetailComponent;
  let fixture: ComponentFixture<VideoDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoDetailComponent],
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

    fixture = TestBed.createComponent(VideoDetailComponent);
    comp = fixture.componentInstance;

  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

});
