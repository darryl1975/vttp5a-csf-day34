import { Component } from '@angular/core';
import jsonData from '../../../assets/countries.json';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  data: any = jsonData;

  canExit(): boolean {
    if (confirm('Do you want to leave this page?')) {
      return true;
    } else {
      return false;
    }
  }
}
