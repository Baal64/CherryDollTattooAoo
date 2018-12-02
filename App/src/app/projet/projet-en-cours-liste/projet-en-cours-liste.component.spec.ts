import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetEnCoursListeComponent } from './projet-en-cours-liste.component';

describe('ProjetEnCoursListeComponent', () => {
  let component: ProjetEnCoursListeComponent;
  let fixture: ComponentFixture<ProjetEnCoursListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetEnCoursListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetEnCoursListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
