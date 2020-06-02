import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTodoComponent } from './list-todo/list-todo.component'; 
import { ListTodosComponent } from './list-todos/list-todos.component'; 

const routes: Routes = [
  {path: 'todo/:title',component: ListTodoComponent },
  {path: 'allTodos',component: ListTodosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
