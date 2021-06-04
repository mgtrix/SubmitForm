import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAziendeComponent } from './lista-aziende.component';

describe('ListaAziendeComponent', () => {
  let component: ListaAziendeComponent;
  let fixture: ComponentFixture<ListaAziendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAziendeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAziendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
