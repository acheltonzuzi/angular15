import { TestBed } from '@angular/core/testing';

import { ProdutosDashboardResolver } from './produtos-dashboard.resolver';

describe('ProdutosDashboardResolver', () => {
  let resolver: ProdutosDashboardResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProdutosDashboardResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
