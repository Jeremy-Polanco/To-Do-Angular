import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('handle task', () => {
    const testingTaskDescription = 'test description!';
    const testTask = {
      id: 99,
      description: 'test',
      isCompleted: false,
      isEditing: false,
    };

    it('should create task', () => {
      component.tasks.push(testTask);
      expect(component.tasks.includes(testTask)).toBe(true);
    });

    it('should delete task', () => {
      component.tasks.push(testTask);
      component.deleteTask(testTask);
      expect(component.tasks.includes(testTask)).toBe(false);
    });
    it('should edit task', () => {
      component.tasks.push(testTask);
      component.editTask({ ...testTask, description: testingTaskDescription });
      expect(
        component.tasks.filter((task) => task.isEditing === true)[0].isEditing
      ).toBe(true);
    });
    it('should toggle completed task', () => {
      component.tasks.push(testTask);
      component.completeTask(testTask);
      expect(
        component.tasks.filter((task) => task.isCompleted === true)[0]
          .isCompleted
      ).toBe(true);
      component.completeTask(testTask);
      expect(
        component.tasks.filter((task) => task.isCompleted === false)[0]
          .isCompleted
      ).toBe(false);
    });

    it('should delete all task', () => {
      component.tasks.push(testTask);
      component.tasks.push({ ...testTask, id: 100 });
      component.tasks.push({ ...testTask, id: 101 });
      component.deleteAllTasks();
      expect(component.tasks).toEqual([]);
    });
  });
});
