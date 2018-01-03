import {SearchService} from './search.service';
import {SearchResource} from '../../resource/search/search.resource';
import {TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {of} from 'rxjs/observable/of';

describe('SearchService', () => {

  let searchServiceMock: SearchService;
  let httpMock: HttpTestingController;
  let searchResourceMock: SearchResource;

  const searchResourceStub = {
    searchVideos: () => {
      return of({});
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: SearchResource, useValue: searchResourceStub},
        SearchService
      ]
    });

    searchServiceMock = TestBed.get(SearchService);
    httpMock = TestBed.get(HttpTestingController);
    searchResourceMock = TestBed.get(SearchResource);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(searchServiceMock).toBeTruthy();
  });

  it('searchVideos() should call search resource', () => {
    const videosResponse = [{}];
    spyOn(searchResourceMock, 'searchVideos').and.returnValue(of(videosResponse));
    searchServiceMock.searchVideos();
    expect(searchResourceMock.searchVideos).toHaveBeenCalled();
  });

});
