import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const log: any = console.log;
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  formInputTitle: string = '';
  formInputfirstName: string = '';
  formInputlastName: string = '';
  formInputDescription: string = '';
  formInputGenre: string = '';
  formInputYearPublished: string = Date();
  formInputImageUrl = '';
  //Turn this into the correct data shaped interface // coming in as undefined
  formInput: any = {
    title: this.formInputTitle,
    firstName: this.formInputfirstName,
    lastName: this.formInputlastName,
    genre: this.formInputGenre,
    publishDate: this.formInputYearPublished,
    imageUrl: this.formInputImageUrl,
    description: this.formInputDescription,
    outOfPrint: false,
  };
  getFormInputs() {
    this.formInput.title = this.formInputTitle;
    this.formInput.firstName = this.formInputfirstName;
    this.formInput.lastName = this.formInputlastName;
    this.formInput.genre = this.formInputGenre;
    this.formInput.publishDate = this.formInputYearPublished;
    this.formInput.imageUrl = this.formInputImageUrl;
    this.formInput.description = this.formInputDescription;
    return this.formInput;
  }

  // make post request to create a new book
  createBookRequest() {
    this.httpClient
      .post('http://localhost:3000/books', this.formInput)
      .subscribe((response) => {
        log('new books', response);
        log('formInput', this.formInput.title);
      });
  }

  editBook() {
    log('formInput', this.formInput.title);
  }

  ngOnInit(): void {}
}

export interface newBooks {
  title: '';
  firstName: '';
  lastName: '';
  description: '';
  imageUrl: '';
  genre: '';
  yearPublished: '';
}
