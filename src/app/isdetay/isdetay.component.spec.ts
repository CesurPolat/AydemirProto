import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsdetayComponent } from './isdetay.component';

describe('IsdetayComponent', () => {
  let component: IsdetayComponent;
  let fixture: ComponentFixture<IsdetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsdetayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsdetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
