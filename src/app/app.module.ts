import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component'; // Import your root AppComponent
import { BookListComponent } from './components/book-list/book-list.component'; // Import the standalone BookListComponent
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    AppComponent,
    AppRoutingModule,
    HttpClientModule,
    BookListComponent // Import BookListComponent directly here
  ],
  providers: [],

})
export class AppModule { }
