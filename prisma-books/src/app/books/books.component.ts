import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: any = [{ title: 'The Book of Trees' }];
  constructor() {}

  displayBooks() {
    this.books.push({ title: 'The Book of Trees' });
  }

  ngOnInit(): void {}
}
