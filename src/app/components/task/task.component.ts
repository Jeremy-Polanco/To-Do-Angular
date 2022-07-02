import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  editTaskInput = '';
  @Input() task: Task = {
    id: 0,
    description: '',
    isCompleted: false,
    isEditing: false,
  };

  @Output() remove: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() complete: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() edit: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {}
  deleteTask(): void {
    this.remove.emit(this.task);
  }
  completeTask(): void {
    this.complete.emit(this.task);
  }
  editTask(e?: any): void {
    if (e !== undefined) {
      this.editTaskInput = e.target.value;
    } else {
      this.task.description = this.editTaskInput;
      this.edit.emit(this.task);
    }
  }
}
