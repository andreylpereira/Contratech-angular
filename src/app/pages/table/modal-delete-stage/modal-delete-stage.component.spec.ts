import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteStageComponent } from './modal-delete-stage.component';

describe('ModalDeleteStageComponent', () => {
  let component: ModalDeleteStageComponent;
  let fixture: ComponentFixture<ModalDeleteStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
