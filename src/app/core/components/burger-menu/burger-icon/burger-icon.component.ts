import { Component } from '@angular/core';

@Component({
  selector: 'burger-icon',
  templateUrl: './burger-icon.component.html',
  styleUrls: ['./burger-icon.component.css']
})
export class BurgerIconComponent {
  onClick() {
    alert("Open Side Nav!")
  }
}
