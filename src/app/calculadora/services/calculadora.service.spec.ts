import { inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';
import ImplementationCallback = jasmine.ImplementationCallback;

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
