import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterUpdateComponent } from './enter-update.component';

describe('EnterUpdateComponent', () => {
  let component: EnterUpdateComponent;
  let fixture: ComponentFixture<EnterUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterUpdateComponent]
    });
    fixture = TestBed.createComponent(EnterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
