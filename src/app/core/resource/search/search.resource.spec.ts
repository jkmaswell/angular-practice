import {SearchResource} from './search.resource';
import {TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('SearchResource', () => {

  let searchResourceMock: SearchResource;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        SearchResource
      ]
    });

    searchResourceMock = TestBed.get(SearchResource);
    httpMock = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(searchResourceMock).toBeTruthy();
  });

  it('should call searchVideos', () => {
    const videosResponse = {data: [{name: 121212, embed: { html: 'html'}, uri: 'some/uri'}]};
    const query = 'animation';
    const page = '1';
    const perPage = '12';

    searchResourceMock.searchVideos(page, perPage, query).subscribe(videos => {
      expect(videos.length).toBe(1);
    });

    const req = httpMock.expectOne('https://api.vimeo.com/videos?page=1&per_page=12&query=animation');
    expect(req.request.method).toBe('GET');
    req.flush(videosResponse);
  });

});
