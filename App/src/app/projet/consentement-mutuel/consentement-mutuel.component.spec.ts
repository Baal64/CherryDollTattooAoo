import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentementMutuelComponent } from './consentement-mutuel.component';

describe('ConsentementMutuelComponent', () => {
  let component: ConsentementMutuelComponent;
  let fixture: ComponentFixture<ConsentementMutuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentementMutuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentementMutuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
