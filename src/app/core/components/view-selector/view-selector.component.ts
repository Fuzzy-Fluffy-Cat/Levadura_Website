import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'view-selector',
  templateUrl: './view-selector.component.html',
  styleUrls: ['./view-selector.component.css']
})
export class ViewSelectorComponent {
  @Output() changeViewEvent = new EventEmitter();
  @Output() changeGraphEvent = new EventEmitter();
  // viewSelectNum = 3;

  changeView(view: any) {
    this.changeViewEvent.emit(view);
  }

  changeGraph() {
    this.changeGraphEvent.emit();
  }
}
