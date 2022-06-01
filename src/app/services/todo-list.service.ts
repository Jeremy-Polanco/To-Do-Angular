import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  public todoList: Task[] = [];
  constructor() {}
  public getTodoList() {
    return this.todoList;
  }
  public loadTasks() {
    return (this.todoList =
      JSON.parse(localStorage.getItem('tasks') as any) || []);
  }
  public saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.todoList));
  }
  public addItem(item: Task): void {
    this.todoList.push(item);
    this.saveTasks();
    this.loadTasks();
  }
  public deleteItem(itemId: number) {
    this.todoList = this.todoList.filter((task) => task.id !== itemId);
    console.log(itemId, this.todoList);
  }
  public completeTask(taskId: number) {
    let newTasks = this.todoList.map((task) => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });

    this.todoList = [...newTasks];
  }
  public editTask(editingTask?: any): void {
    console.log(editingTask);

    let newTasks = this.todoList.map((task) => {
      if (task.id === editingTask.id) {
        task.isEditing = !editingTask.isEditing;
      }

      if (task.description === '' && editingTask.isEditing === false) {
        task.isEditing = true;
        alert('Please add task description');
      }
      return task;
    });

    this.todoList = [...newTasks];
  }
}
