import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRenameWorkComponent } from './modal-rename-work.component';

describe('ModalRenameWorkComponent', () => {
  let component: ModalRenameWorkComponent;
  let fixture: ComponentFixture<ModalRenameWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRenameWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRenameWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
