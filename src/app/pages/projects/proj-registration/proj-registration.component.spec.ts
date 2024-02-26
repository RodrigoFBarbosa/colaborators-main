import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjRegistrationComponent } from './proj-registration.component';

describe('ProjRegistrationComponent', () => {
  let component: ProjRegistrationComponent;
  let fixture: ComponentFixture<ProjRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjRegistrationComponent]
    });
    fixture = TestBed.createComponent(ProjRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
