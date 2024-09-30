import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class AddBookComponent {
  book: Book = { bookID: 0, title: '', author: '', totalCopies: 0, availableCopies: 0 };

  constructor(private bookService: BookService, private router: Router) {}

  addBook(): void {
    this.bookService.addBook(this.book).subscribe(() => {
      this.router.navigate(['/books']); 
    }, error => {
      console.error('Error adding book:', error);
    });
  }
}
