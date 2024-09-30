import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service'; 
import { Book } from '../../models/book'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-book',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule] 
})
export class EditBookComponent implements OnInit {
  book: Book = { bookID: 0, title: '', author: '', totalCopies: 0, availableCopies: 0 }; 

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService 
  ) {}

  ngOnInit(): void {
    const bookId = Number(this.route.snapshot.paramMap.get('id')); 
    this.bookService.getBookById(bookId).subscribe((data: Book) => {
      this.book = data; 
    });
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted:', this.book);
      this.updateBook(); 
      form.reset(); 
    }
  }

  updateBook(): void {
    this.bookService.updateBook(this.book.bookID, this.book).subscribe(
      () => {
        console.log('Book updated successfully');
      },
      (error) => {
        console.error('Error updating book:', error);
      }
    );
  }
}
