import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-reading-list',
  templateUrl: './create-reading-list.component.html',
  styleUrls: ['./create-reading-list.component.css'],
})
export class CreateReadingListComponent implements OnInit {
  @Input() readingListItem: any = [];
  constructor() {}

  addToReadinglist(book: any) {
    this.readingListItem.push(book);
    console.log('reading list', this.readingListItem);
  }
  ngOnInit(): void {}
}
