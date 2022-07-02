import { TestBed } from '@angular/core/testing';

import { TodoListService } from './todo-list.service';

describe('TodoListService', () => {
  let service: TodoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('handle task manager functionalities', () => {
    const testingTaskDescription = 'test description!';
    const testTask = {
      id: 1,
      description: 'test',
      isCompleted: false,
      isEditing: false,
    };
    it('should add task to the todo list', () => {
      service.addItem({ ...testTask, id: 2 });
      expect(service.getTodoList()).toContain({ ...testTask, id: 2 });
    });
    it('should delete task to the todo list', () => {
      service.addItem({ ...testTask, id: 2 });
      service.deleteItem(2);
      expect(service.getTodoList()).toEqual([]);
    });
    it('should toggle complete task of the todo list', () => {
      service.addItem({ ...testTask, id: 2 });
      service.completeTask(2);
      expect(service.getTodoList()[0].isCompleted).toBe(true);
      service.completeTask(2);
      expect(service.getTodoList()[0].isCompleted).toBe(false);
    });
    it('should edit task of the todo list', () => {
      service.addItem({ ...testTask, id: 2 });
      service.editTask({ ...testTask, id: 2, description: 'edited task' });
      expect(service.getTodoList()[0].isEditing).toBe(true);
      service.editTask({ ...testTask, id: 2 });
      expect(service.getTodoList()[0].isCompleted).toBe(false);
    });
    it('should get the todo list', () => {
      service.addItem(testTask);
      expect(service.getTodoList()).toContain(testTask);
    });
  });
});
