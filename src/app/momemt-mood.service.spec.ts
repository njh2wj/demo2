import { TestBed } from '@angular/core/testing';

import { GlobalMoodService } from './moment-mood.service';

describe('GlobalMoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalMoodService = TestBed.get(GlobalMoodService);
    expect(service).toBeTruthy();
  });
});
