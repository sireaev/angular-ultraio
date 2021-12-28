import { TestBed } from '@angular/core/testing';
import { clean } from './utils';

describe('Utils', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();
  });

  it('should clean the object', () => {
    expect(clean({ data: 'test', any: '' })).toBeTruthy();
    expect(clean({ data: 'test', any: '' })).toEqual({ data: 'test' });
  });
});
