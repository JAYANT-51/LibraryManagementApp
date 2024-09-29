import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [MatTableModule], // Ensure MatTableModule is imported
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  displayedColumns: string[] = ['bookID', 'title', 'author', 'totalCopies', 'availableCopies', 'actions'];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks(); // Fetch books when the component initializes
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe(
      (data) => {
        this.books = data; // Assign fetched data to the books array
      },
      (error) => {
        console.error('Error fetching books:', error); // Log any errors
      }
    );
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter(book => book.bookID !== id);
    });
  }
}
