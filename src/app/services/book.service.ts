
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://localhost:7050/api/Books'; 
  private issueApiUrl = 'https://localhost:7050/api/IssuedBooks';

  constructor(private http: HttpClient) {}

  
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl); 
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`); 
  }

  
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book); 
  }

  
  updateBook(id: number, book: Book): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, book); 
  }

  
  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); 
  }
  searchBooks(query: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/search?query=${query}`);
  }

  issueBook(bookId: number, userId: number): Observable<any> {
    const url = `${this.issueApiUrl}/IssueBook?bookId=${bookId}&userId=${userId}`;
    return this.http.get(url);
  }

  returnBook(issueId: number): Observable<void> {
    const url = `${this.issueApiUrl}/ReturnBook?issueId=${issueId}`; // Construct the URL with query parameter
    return this.http.post<void>(url, {}); // Send an empty object as the body of the PUT request
  }
}
