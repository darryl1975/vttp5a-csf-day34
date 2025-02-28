import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  canExit(): boolean {
    if (confirm('Do you want to leave this page?')) {
      return true;
    } else {
      return false;
    }
  }
}
