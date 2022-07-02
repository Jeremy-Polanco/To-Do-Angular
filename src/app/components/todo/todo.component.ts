import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  task = {
    id: 0,
    description: '',
    isCompleted: false,
    isEditing: false,
  };
  tasks: Task[] = [];

  constructor(private todoListService: TodoListService) {}
  ngOnInit(): void {
    this.tasks = this.todoListService.loadTasks();
  }
  updateTask(taskDescription: any): void {
    this.task.description = taskDescription.target.value;
  }
  deleteTask(task: Task): void {
    this.todoListService.deleteItem(task.id);
    this.tasks = this.todoListService.getTodoList();
    this.saveTasks();
  }
  completeTask(task: Task): void {
    this.todoListService.completeTask(task.id);
    this.saveTasks();
  }
  editTask(taskDescription: Task): void {
    this.todoListService.editTask(taskDescription);
    this.tasks = this.todoListService.getTodoList();
    this.saveTasks();
  }
  deleteAllTasks(): void {
    this.tasks = [];
    this.saveTasks();
  }
  saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  loadTasks(): void {
    if (localStorage.getItem('tasks')) {
      this.tasks = JSON.parse(localStorage.getItem('tasks') as any) || '[]';
    }
  }
  drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
}
