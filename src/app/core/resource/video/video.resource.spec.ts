import {VideoResource} from './video.resource';
import {TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('VideoResource', () => {

  let videoResourceMock: VideoResource;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        VideoResource
      ]
    });

    videoResourceMock = TestBed.get(VideoResource);
    httpMock = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(videoResourceMock).toBeTruthy();
  });

  it('should call getTotalVideosByCategory', () => {
    const totalResponse = {total: 121212};
    const categoryId = 'animation';
    const page = '1';
    const perPage = '12';

    videoResourceMock.getTotalVideosByCategory(categoryId, page, perPage).subscribe(total => {
      expect(total).toBeTruthy();
    });

    const req = httpMock.expectOne('https://api.vimeo.com/categories/animation/videos?page=1&per_page=12');
    expect(req.request.method).toBe('GET');
    req.flush(totalResponse);
  });

  it('should call getVideosByCategory', () => {
    const videosResponse = {data: [{name: 121212, embed: { html: 'html'}, uri: 'some/uri'}]};
    const categoryId = 'animation';
    const page = '1';
    const perPage = '12';

    videoResourceMock.getVideosByCategory(categoryId, page, perPage).subscribe(videos => {
      expect(videos.length).toBe(1);
    });

    const req = httpMock.expectOne('https://api.vimeo.com/categories/animation/videos?page=1&per_page=12');
    expect(req.request.method).toBe('GET');
    req.flush(videosResponse);
  });

  it('should call getVideoDetail', () => {
    const videosResponse = {name: 121212, embed: {html: 'html'}, uri: 'some/uri'};
    const videoId = '108650530';

    videoResourceMock.getVideoDetail(videoId).subscribe(video => {
      expect(video).toBeTruthy();
    });

    const req = httpMock.expectOne('https://api.vimeo.com/videos/108650530');
    expect(req.request.method).toBe('GET');
    req.flush(videosResponse);
  });

  it('should call getVideoComments', () => {
    const commentsResponse = {data: [{text: 'test', created_on: 'created', user: {name: 'name'}}]};
    const videoId = '108650530';

    videoResourceMock.getVideoComments(videoId).subscribe(comments => {
      expect(comments).toBeTruthy();
    });

    const req = httpMock.expectOne('https://api.vimeo.com/videos/108650530/comments');
    expect(req.request.method).toBe('GET');
    req.flush(commentsResponse);
  });


});
