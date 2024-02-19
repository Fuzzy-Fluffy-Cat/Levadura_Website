import { Component } from '@angular/core';

@Component({
  selector: 'burger-ctr',
  templateUrl: './burger-container.component.html',
  styleUrls: ['./burger-container.component.css']
})
export class BurgerContainerComponent {
  onClick() {
    console.log("Burger Open!");
  }
}
