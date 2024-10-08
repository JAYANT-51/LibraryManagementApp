import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { AddBookComponent } from './components/book-add/book-add.component';
import { EditBookComponent } from './components/book-edit/book-edit.component'

export const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'books/add', component: AddBookComponent },
  { path: 'books/edit/:id', component: EditBookComponent },
  { path: '**', redirectTo: '/books' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
