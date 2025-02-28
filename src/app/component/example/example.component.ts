import { Component, OnInit } from '@angular/core';


import { map, take, tap } from 'rxjs/operators';
import { firstValueFrom, from, lastValueFrom, Observable } from 'rxjs';

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


  numberSeries = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  sumOfNumbers() {
    this.numberSeries
      .pipe(map(data => {
        console.log('Tapping: ' + (data + 1))
        return data;
      }))
      .subscribe(data => { console.log('Subscribe: ' + data); });
  }

  MapAndTapExample() {

    this.numberSeries
      .pipe(
        tap(data => { console.log('Before changing: ' + data) }),
        map(data => { return data * 3 }),
        tap(data => { console.log('After changing: ' + data) })
      )
      .subscribe(data => { console.log('Subscribe: ' + data); });
  }

  async firstValueFrom() {
    this.numberSeries
      .pipe(take(1))
      .subscribe(data => { console.log(data); });

      const value = await lastValueFrom(this.numberSeries);

  }
  constructor() { }

  ngOnInit(): void {

    this.multiplyBy3();

    this.toUpperCase();

    this.sumOfNumbers();

    this.MapAndTapExample();

    this.firstValueFrom();
  }
}

