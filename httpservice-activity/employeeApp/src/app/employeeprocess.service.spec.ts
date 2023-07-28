import { TestBed } from '@angular/core/testing';

import { EmployeeprocessService } from './employeeprocess.service';

describe('EmployeeprocessService', () => {
  let service: EmployeeprocessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeprocessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
