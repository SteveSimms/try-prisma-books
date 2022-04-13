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
  // filteredString: string = this.books.filter((book: any) => {
  //   let filteredBook = book.title
  //     .toLowerCase()
  //     .includes(this.filteredString.toLowerCase());
  //   console.log(filteredBook);
  //   return filteredBook;
  // });

  searchInput: any = '';
  filterString: any = '';

  constructor(private httpClient: HttpClient) {
    this.getBooksFromServer();
    this.setInputValue();
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

  setInputValue() {
    this.books.filter((book: any) => {
      let filteredBook = book.title
        .toLowerCase()
        .includes(this.searchInput.toLowerCase());
      console.log(filteredBook);
      return filteredBook;
    });
    return this.searchInput;
  }
  ngOnInit(): void {}
}
