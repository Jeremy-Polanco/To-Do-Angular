import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListService } from '../../services/todo-list.service';
import { TaskComponent } from './task.component';

let todoListServiceStub: Partial<TodoListService>;

todoListServiceStub = {
  todoList: [],
};

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskComponent],
      providers: [{ provide: TodoListService, useValues: todoListServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
