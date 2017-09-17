/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GitIssuesService } from './git-issues.service';

describe('GitIssuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitIssuesService]
    });
  });

  it('should ...', inject([GitIssuesService], (service: GitIssuesService) => {
    expect(service).toBeTruthy();
  }));
});
