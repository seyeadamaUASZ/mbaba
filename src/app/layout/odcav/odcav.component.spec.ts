import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdcavComponent } from './odcav.component';

describe('OdcavComponent', () => {
  let component: OdcavComponent;
  let fixture: ComponentFixture<OdcavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdcavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdcavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
