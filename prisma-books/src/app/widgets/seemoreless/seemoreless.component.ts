import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seemoreless',
  templateUrl: './seemoreless.component.html',
  styleUrls: ['./seemoreless.component.css'],
})
export class SeemorelessComponent implements OnInit {
  constructor() {}
  @Input() text: string = '';
  @Input() wordLimit: number = 0;
  showMore: boolean = false;
  ngOnInit(): void {}
}
