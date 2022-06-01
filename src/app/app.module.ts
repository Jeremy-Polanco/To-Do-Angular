import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TodoComponent } from './components/todo/todo.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { TodoListService } from './services/todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ErrorPageComponent,
    AddTaskComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    ReactiveFormsModule,
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
