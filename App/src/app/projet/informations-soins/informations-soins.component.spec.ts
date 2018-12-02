import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsSoinsComponent } from './informations-soins.component';

describe('InformationsSoinsComponent', () => {
  let component: InformationsSoinsComponent;
  let fixture: ComponentFixture<InformationsSoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationsSoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsSoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
