import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

const log = console.log;
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  @Input() books: any = [];
  readingListItem: any = [];
  @Input() searchInput: any = '';
  @Input() filterString: any = '';

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) {
    this.getBooksFromServer();
    this.setInputValue();
  }
  //CRUD OPERATIONS -may be changed to get readingList from server organize an authenticated user's personal library and modify it as well.

  getBooksFromServer() {
    this.httpClient
      .get<any>('http://localhost:3000/books')
      .subscribe((response) => {
        log('books', response);
        this.books = response;
      });
  }

  //POST REQUEST pending....(add reading list to users model and create a relationship between user and book)
  addToReadinglist(book: any) {
    this.readingListItem.push(book);
    console.log('reading list', this.readingListItem);
  }

  //Patch Request
  editReadinglist(book: any) {
    console.log('editing.....', book);
  }
  //DELETE REQUEST
  deleteBook(book: any) {
    console.log('deleting.....', book);
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
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.books.filter(
          (book: any) =>
            book.title
              .toLowerCase()
              .includes(params['searchTerm'].toLowerCase()) ||
            book.firstName
              .toLowerCase()
              .includes(params['searchTerm'].toLowerCase()) ||
            book.lastName
              .toLowerCase()
              .includes(params['searchTerm'].toLowerCase()),
        );
      } else {
        this.books;
      }
    });
  }
}
