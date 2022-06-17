import { TestBed } from '@angular/core/testing';

import { CaptainCoasterInterceptorInterceptor } from './captain-coaster-interceptor.interceptor';

describe('CaptainCoasterInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CaptainCoasterInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CaptainCoasterInterceptorInterceptor = TestBed.inject(CaptainCoasterInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
