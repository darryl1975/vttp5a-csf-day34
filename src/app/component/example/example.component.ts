import { Component, OnInit } from '@angular/core';


import { map } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent implements OnInit {

  numbersArray = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  multiplyBy3() {
    this.numbersArray
      .pipe(map(data => { return data * 3 }))
      .subscribe(data => { console.log(data); });
  }

  foodArray = from(["Pizza", "Burger", "Sandwich", "Pasta", "Biryani"]);

  toUpperCase() {
    this.foodArray
      .pipe(map(data => { return data.toUpperCase() }))
      .subscribe(data => { console.log(data); });
  }

  nameArray = from([
    { fname: "John", lname: "Smith" },
    { fname: "Dever", lname: "Joe" },
    { fname: "Smith", lname: "Will" }
  ]);

  concateToFullName() {
    this.nameArray
      .pipe(map(data => { return data.fname + " " + data.lname }))
      .subscribe(data => { console.log(data); });
  }

  constructor() { }

  ngOnInit(): void {

    this.multiplyBy3();

    this.toUpperCase();
  }
}

