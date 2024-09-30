import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; 
import { AppRoutingModule } from './app-routing.module';
import { AddBookComponent } from './components/book-add/book-add.component'; 
import { EditBookComponent } from './components/book-edit/book-edit.component';
import { BookService } from './services/book.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    RouterModule,
    HttpClientModule,
    FormsModule,          
    AppRoutingModule
  ],
  providers: [BookService],
})
export class AppModule { }

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

bootstrapApplication(AppComponent);
