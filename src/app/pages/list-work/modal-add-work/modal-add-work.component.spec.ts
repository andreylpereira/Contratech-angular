import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddWorkComponent } from './modal-add-work.component';

describe('ModalAddWorkComponent', () => {
  let component: ModalAddWorkComponent;
  let fixture: ComponentFixture<ModalAddWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
