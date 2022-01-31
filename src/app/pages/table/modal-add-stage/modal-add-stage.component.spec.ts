import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddStageComponent } from './modal-add-stage.component';

describe('ModalAddStageComponent', () => {
  let component: ModalAddStageComponent;
  let fixture: ComponentFixture<ModalAddStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddStageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
