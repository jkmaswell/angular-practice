import {CategoryResource} from './category.resource';
import {TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('NavComponent', () => {

  let categoryResourceMock: CategoryResource;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        CategoryResource
      ]
    });

    categoryResourceMock = TestBed.get(CategoryResource);
    httpMock = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(categoryResourceMock).toBeTruthy();
  });

  it('should call getAllCategories', () => {
    const categoriesResponse = {data: [{name: 'cat 1', uri: 'some/mock'}]};
    categoryResourceMock.getAllCategories().subscribe(categories => {
      expect(categories.length).toBe(1);
    });
    const req = httpMock.expectOne('https://api.vimeo.com/categories');
    expect(req.request.method).toBe('GET');
    req.flush(categoriesResponse);
  });

});
