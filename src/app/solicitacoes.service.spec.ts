import { TestBed } from '@angular/core/testing';

import { SolicitacoesService } from './solicitacoes.service';

describe('SolicitacoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolicitacoesService = TestBed.get(SolicitacoesService);
    expect(service).toBeTruthy();
  });
});
