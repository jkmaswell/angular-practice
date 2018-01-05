import {VideoService} from './video.service';
import {VideoResource} from '../../resource/video/video.resource';
import {TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {of} from 'rxjs/observable/of';

describe('UserService', () => {

  let videoServiceMock: VideoService;
  let httpMock: HttpTestingController;
  let videoResourceMock: VideoResource;

  const videoResourceStub = {
    getTotalVideosByCategory: () => {
      return of({});
    },
    getVideosByCategory: () => {
      return of({});
    },
    getVideoDetail: () => {
      return of({});
    },
    getVideoComments: () => {
      return of({});
    },
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
        {provide: VideoResource, useValue: videoResourceStub},
        VideoService
      ]
    });

    videoServiceMock = TestBed.get(VideoService);
    httpMock = TestBed.get(HttpTestingController);
    videoResourceMock = TestBed.get(VideoResource);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(videoServiceMock).toBeTruthy();
  });

  it('getTotalVideosByCategory() should call video resource', () => {
    const totalResponse = {};
    const categoryId = 'some';
    const page = '1';
    const per_page = '12';
    spyOn(videoResourceMock, 'getTotalVideosByCategory').and.returnValue(of(totalResponse));
    videoServiceMock.getTotalVideosByCategory(categoryId, page, per_page);
    expect(videoResourceMock.getTotalVideosByCategory).toHaveBeenCalled();
  });

  it('getVideosByCategory() should call video resource', () => {
    const videosResponse = [{}];
    const categoryId = 'some';
    const page = '1';
    const per_page = '12';
    spyOn(videoResourceMock, 'getVideosByCategory').and.returnValue(of(videosResponse));
    videoServiceMock.getVideosByCategory(categoryId, page, per_page);
    expect(videoResourceMock.getVideosByCategory).toHaveBeenCalled();
  });

  it('getVideoDetail() should call video resource', () => {
    const videoResponse = {};
    const videoId = 'some';
    spyOn(videoResourceMock, 'getVideoDetail').and.returnValue(of(videoResponse));
    videoServiceMock.getVideoDetail(videoId);
    expect(videoResourceMock.getVideoDetail).toHaveBeenCalled();
  });

  it('getVideoComments() should call video resource', () => {
    const videoResponse = [{}];
    const videoId = 'some';
    spyOn(videoResourceMock, 'getVideoComments').and.returnValue(of(videoResponse));
    videoServiceMock.getVideoComments(videoId);
    expect(videoResourceMock.getVideoComments).toHaveBeenCalled();
  });

  it('should call searchVideos', () => {
    const videosResponse = {data: [{name: 121212, embed: { html: 'html'}, uri: 'some/uri'}]};
    const query = 'animation';
    const page = '1';
    const perPage = '12';

    videoResourceMock.searchVideos(page, perPage, query).subscribe(videos => {
      expect(videos.length).toBe(1);
    });

    const req = httpMock.expectOne('https://api.vimeo.com/videos?page=1&per_page=12&query=animation');
    expect(req.request.method).toBe('GET');
    req.flush(videosResponse);
  });

});
