import { TestBed } from '@angular/core/testing';

import { SharedSer } from './shared-ser';

describe('SharedSer', () => {
  let service: SharedSer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedSer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
