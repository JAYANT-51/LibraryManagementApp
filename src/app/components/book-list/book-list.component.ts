import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [MatTableModule, RouterModule], 
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  newBook: Book = { bookID: 0, title: '', author: '', totalCopies: 1, availableCopies: 1 };
  displayedColumns: string[] = ['bookID', 'title', 'author', 'totalCopies', 'availableCopies', 'actions'];

  constructor(private bookService: BookService, private authService: AuthService) {}

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
  addBook(): void {
    if (this.newBook.title && this.newBook.author && this.newBook.totalCopies > 0) {
      this.newBook.availableCopies = this.newBook.totalCopies; // Initialize available copies
      this.bookService.addBook(this.newBook).subscribe(
        (data) => {
          this.books.push(data); // Add the new book to the list
          this.newBook = { bookID: 0, title: '', author: '', totalCopies: 1, availableCopies: 1 }; // Reset form
        },
        (error) => {
          console.error('Error adding book:', error);
        }
      );
    }
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter(book => book.bookID !== id);
    });
  }

  issueBook(bookId: number): void {
    const userId = this.authService.getUserId(); // Get the logged-in user's ID dynamically

    if (userId !== null) { // Ensure user ID is available
      this.bookService.issueBook(bookId, userId).subscribe({
        next: (response) => {
          console.log('Book issued successfully', response);
          alert('Book issued successfully!');
          this.getBooks(); // Refresh the book list
        },
        error: (err) => {
          console.error('Error issuing book', err);
          alert('Failed to issue the book.'); // Error feedback
        }
      });
    } else {
      alert('User ID not found. Please log in to issue a book.'); // Feedback if user ID is not available
    }
  }

  returnBook(bookId: number): void {
    this.bookService.returnBook(bookId).subscribe({
      next: (response) => {
        console.log('Book returned successfully', response);
        alert('Book returned successfully!'); // Feedback on successful return
        this.getBooks(); // Refresh the book list after return
      },
      error: (err) => {
        console.error('Error returning book', err);
        alert('Failed to return the book.'); // Error feedback
      }
    });
  }

  searchBooks(query: string): void {
    this.bookService.searchBooks(query).subscribe(
      (data) => {
        this.books = data;
      },
      (error) => {
        console.error('Error searching books:', error);
      }
    );
  }
}