import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { of } from 'rxjs';
import { GiphyService } from '../../services/giphy.service';
import { GiphySearchComponent } from '../giphy-search/giphy-search.component';

import { GiphyListComponent } from './giphy-list.component';

describe('GiphyListComponent', () => {
  let component: GiphyListComponent;
  let fixture: ComponentFixture<GiphyListComponent>;
  let service: GiphyService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        FormsModule,
        NgSelectModule
      ],
      declarations: [GiphyListComponent, GiphySearchComponent],
      providers: [GiphyService]
    }).compileComponents();

    service = TestBed.inject(GiphyService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get images with trending list', () => {
    const spy = jest
      .spyOn(service, 'get')
      .mockImplementation(() => of({ data: [{ url: 'test' }] }));
    component.getImages();
    expect(spy).toHaveBeenCalled();
    expect(component.images).toEqual([{ url: 'test' }]);
  });

  it('should get images without data when there are no more images', () => {
    const spy = jest
      .spyOn(service, 'get')
      .mockImplementation(() => of({ data: [] }));
    component.getImages();
    expect(spy).toHaveBeenCalled();
    expect(component.images).toEqual([]);
  });

  it('should get images when fetching for the 2nd and 3rd time', () => {
    const spy = jest
      .spyOn(service, 'get')
      .mockImplementation(() => of({ data: [{}, {}] }));
    component.request.offset = 18;
    component.getImages();
    expect(spy).toHaveBeenCalled();
    expect(component.images).toEqual([{}, {}]);
  });

  it('should fetchNext with offset 0', () => {
    const spy = jest.spyOn(component, 'getImages');
    component.fetchNext();
    expect(spy).toHaveBeenCalled();
  });

  it('should fetchNext with offset 9', () => {
    const spy = jest.spyOn(component, 'getImages');
    component.request.offset = 9;
    component.fetchNext();
    expect(spy).toHaveBeenCalled();
  });

  it('should searchImages', () => {
    const spyReset = jest.spyOn(component, 'reset');
    const spyFetch = jest.spyOn(component, 'getImages');
    component.searchImages();
    expect(component.request.limit).toEqual(9);
    expect(spyReset).toHaveBeenCalled();
    expect(spyFetch).toHaveBeenCalled();
  });

  it('should reset', () => {
    component.reset();
    expect(component.request.limit).toEqual(9);
    expect(component.request.offset).toEqual(0);
    expect(component.isFetchDone).toEqual(false);
  });
});
