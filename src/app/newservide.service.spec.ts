import { TestBed } from '@angular/core/testing';

import { NewservideService } from './newservide.service';

describe('NewservideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewservideService = TestBed.get(NewservideService);
    expect(service).toBeTruthy();
  });
});
