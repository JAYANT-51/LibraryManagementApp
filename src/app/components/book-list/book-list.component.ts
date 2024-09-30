import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [MatTableModule, RouterModule], 
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  displayedColumns: string[] = ['bookID', 'title', 'author', 'totalCopies', 'availableCopies', 'actions'];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks(); 
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(
      (data) => {
        this.books = data; 
      },
      (error) => {
        console.error('Error fetching books:', error); 
      }
    );
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter(book => book.bookID !== id);
    });
  }
}
