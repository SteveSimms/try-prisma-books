import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const log = console.log;
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: any = [];
  // filterdSearch: string = '';
  filteredString: string = '';
  constructor(private httpClient: HttpClient) {
    this.getBooksFromServer();
  }

  getBooksFromServer() {
    this.httpClient
      .get<any>('http://localhost:3000/books')
      .subscribe((response) => {
        log('books', response);
        this.books = response;
      });
  }

  seeMoreDescription() {
    this.books.description;
  }

  ngOnInit(): void {}
}
