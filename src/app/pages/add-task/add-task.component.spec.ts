import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AddTaskComponent } from './add-task.component';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTaskComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('handle adding tasks', () => {
    const testTask = {
      id: 1,
      description: 'test',
      isCompleted: false,
      isEditing: false,
    };
    it('should create a new task', () => {
      let event = new SubmitEvent('submit');
      component.submitForm(event);
      expect(
        component.tasks.filter(
          (task) => task.description === testTask.description
        )[0].description
      ).toEqual('test');
    });
    it('should toggle completed new task', () => {
      component.completeNewTask();
      expect(component.newTask.isCompleted).toBe(true);
      component.completeNewTask();
      expect(component.newTask.isCompleted).toBe(false);
    });
  });
});
