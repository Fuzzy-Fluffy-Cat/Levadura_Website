import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'i-map',
  templateUrl: './i-map.component.html',
  styleUrls: ['./i-map.component.css']
})
export class IMapComponent implements OnInit {
  ngOnInit() {
    console.log("Map has been rendered")
  }
}
