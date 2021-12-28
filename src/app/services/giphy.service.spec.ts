import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GiphyService } from './giphy.service';

describe('GiphyService', () => {
  let service: GiphyService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GiphyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data without search terms', () => {
    const spy = jest.spyOn(service, 'get');
    service.get({ limit: 9, offset: 0 });
    expect(spy).toHaveBeenCalled();
  });

  it('should fetch data with terms', () => {
    const spy = jest.spyOn(service, 'get');
    service.get({ limit: 9, offset: 0, q: 'test' });
    expect(spy).toHaveBeenCalled();
  });
});
