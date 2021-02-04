import { TestBed } from '@angular/core/testing';

import { NavigatorService } from './navigator.service';
import { Router } from '@angular/router';

describe('NavigatorService', () => {
  let service: NavigatorService;

  const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: mockRouter }],
    });

    service = TestBed.inject(NavigatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#navigate should call router with target received', () => {
    service.navigate('test');

    expect(mockRouter.navigate).toHaveBeenCalledWith(['test']);
  });
});
