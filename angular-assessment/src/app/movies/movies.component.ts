import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  InputData = '';
  

  constructor() { }

  ngOnInit() {
  }
 

  dataInput(event) {
    console.log(event.target.value);
    this.InputData = event.target.value;
  }
}
