import {CategoryService} from './category.service';
import {TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CategoryResource} from '../../resource/category/category.resource';
import {of} from 'rxjs/observable/of';

describe('CategoryService', () => {

  let categoryServiceMock: CategoryService;
  let httpMock: HttpTestingController;
  let categoryResourceMock: CategoryResource;

  const categoryResourceStub = {
    getAllCategories: () => {
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
        {provide: CategoryResource, useValue: categoryResourceStub},
        CategoryService
      ]
    });

    categoryServiceMock = TestBed.get(CategoryService);
    httpMock = TestBed.get(HttpTestingController);
    categoryResourceMock = TestBed.get(CategoryResource);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(categoryServiceMock).toBeTruthy();
  });

  it('getAllCategories() should call category resource', () => {
    const categoriesResponse = [{}];
    spyOn(categoryResourceMock, 'getAllCategories').and.returnValue(of(categoriesResponse));
    categoryServiceMock.getAllCategories();
    expect(categoryResourceMock.getAllCategories).toHaveBeenCalled();
  });

});
