import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenActualizarPersonaComponent } from './screen-actualizar-persona.component';

describe('ScreenActualizarPersonaComponent', () => {
  let component: ScreenActualizarPersonaComponent;
  let fixture: ComponentFixture<ScreenActualizarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenActualizarPersonaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenActualizarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
