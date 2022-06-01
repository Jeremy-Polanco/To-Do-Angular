import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Task } from '../../interfaces/task';
import { TodoListService } from '../../services/todo-list.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();
  tasks: Task[] = [];
  newTask: Task = {
    id: this.tasks.length + 1,
    description: '',
    isCompleted: false,
    isEditing: false,
  };
  tasksForm = this.fb.group({
    description: ['', Validators.required],
    isCompleted: [false],
    isEditing: [false],
  });
  constructor(
    private todoListService: TodoListService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.tasks = this.todoListService.loadTasks();
  }
  submitForm(e: any): void {
    if (e) {
      e.preventDefault();
    }
    if (this.tasksForm.value.description.trim() !== '') {
      this.tasksForm.value.id = this.tasksForm.value.id++;
      this.todoListService.addItem({
        ...this.tasksForm.value,
        description: this.tasksForm.value.description.trim(),
        id: this.tasks.length + 1,
      });
    } else {
      return alert('Please add task description');
    }
    this.tasksForm.value.description = '';
    this.tasks = this.todoListService.loadTasks();
  }

  updateDescription(e: any): void {
    e.preventDefault();
    this.tasksForm.value.description = e.target.value;
  }
  completeNewTask(): void {
    this.newTask.isCompleted = !this.newTask.isCompleted;
  }
}
