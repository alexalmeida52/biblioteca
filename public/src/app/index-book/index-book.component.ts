import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-book',
  templateUrl: './index-book.component.html',
  styleUrls: ['./index-book.component.css']
})
export class IndexBookComponent implements OnInit {
  books: any = [];
  data: any = {};
  constructor() { }

  ngOnInit() {
    this.books = JSON.parse(localStorage.getItem('data'));
  }

  

}
