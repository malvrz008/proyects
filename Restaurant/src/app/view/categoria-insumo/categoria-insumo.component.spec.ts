import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaInsumoComponent } from './categoria-insumo.component';

describe('CategoriaInsumoComponent', () => {
  let component: CategoriaInsumoComponent;
  let fixture: ComponentFixture<CategoriaInsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaInsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
