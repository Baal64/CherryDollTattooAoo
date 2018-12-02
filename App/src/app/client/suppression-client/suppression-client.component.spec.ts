import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppressionClientComponent } from './suppression-client.component';

describe('SuppressionClientComponent', () => {
  let component: SuppressionClientComponent;
  let fixture: ComponentFixture<SuppressionClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppressionClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppressionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
