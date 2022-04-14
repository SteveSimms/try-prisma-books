import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  bookModal: Modal | undefined;
  constructor() {}
  formInputTitle: string = '';
  formInputfirstName: string = '';
  formInputlastName: string = '';
  formInputDescription: string = '';
  formInputGenre: string = '';
  formInputYearPublished: string = '';
  //Turn this into the correct data shaped interface
  formInput: any = {
    title: '',
    firstName: '',
    lastName: '',
    description: '',
    genre: '',
    yearPublished: '',
  };
  createBook() {}

  onOpenModal() {
    console.log('open modal');
    let modal: any = document.getElementById('wrkoutModal');
    this.bookModal = new Modal(modal, {
      keyboard: false,
    });
  }

  ngOnInit(): void {}
}
