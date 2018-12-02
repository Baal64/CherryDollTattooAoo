import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTotaleClientsComponent } from './liste-totale-clients.component';

describe('ListeTotaleClientsComponent', () => {
  let component: ListeTotaleClientsComponent;
  let fixture: ComponentFixture<ListeTotaleClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTotaleClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTotaleClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
