import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltagedropComponent } from './voltagedrop.component';

describe('VoltagedropComponent', () => {
  let component: VoltagedropComponent;
  let fixture: ComponentFixture<VoltagedropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoltagedropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoltagedropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
