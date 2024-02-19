import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'engagement-views',
  templateUrl: './engagement-views.component.html',
  styleUrls: ['./engagement-views.component.css']
})
export class EngagementViewsComponent {
  // @Output() changeViewEvent = new EventEmitter();

  viewSelectNum = 0;
  graphSelectNum = 0;

  ngOnInit() {
    console.log("!!!!!");
  }

  changeView(value: any) {
    this.viewSelectNum = value;
    // this.changeViewEvent.emit(value);
  }

  changeGraph() {
    if (this.graphSelectNum != 3) {
      this.graphSelectNum = this.graphSelectNum +  1;
    }
    else {
      this.graphSelectNum = 0
    }
  }
}
