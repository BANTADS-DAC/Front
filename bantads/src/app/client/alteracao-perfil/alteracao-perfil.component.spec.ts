import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteracaoPerfilComponent } from './alteracao-perfil.component';

describe('AlteracaoPerfilComponent', () => {
  let component: AlteracaoPerfilComponent;
  let fixture: ComponentFixture<AlteracaoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlteracaoPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlteracaoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
