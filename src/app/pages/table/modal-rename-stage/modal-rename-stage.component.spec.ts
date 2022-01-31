import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRenameStageComponent } from './modal-rename-stage.component';

describe('ModalRenameStageComponent', () => {
  let component: ModalRenameStageComponent;
  let fixture: ComponentFixture<ModalRenameStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRenameStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRenameStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
