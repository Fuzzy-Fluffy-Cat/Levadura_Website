import { Component } from '@angular/core';

@Component({
  selector: 'burger-text',
  templateUrl: './burger-text.component.html',
  styleUrls: ['./burger-text.component.css']
})
export class BurgerTextComponent {
  onClick() {
    alert("Open Side Navigation")
  }
}
