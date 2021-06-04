import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiAziendaComponent } from './aggiungi-azienda.component';

describe('AggiungiAziendaComponent', () => {
  let component: AggiungiAziendaComponent;
  let fixture: ComponentFixture<AggiungiAziendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggiungiAziendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiAziendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
