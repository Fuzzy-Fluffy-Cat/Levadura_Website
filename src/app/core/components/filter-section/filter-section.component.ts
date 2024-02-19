import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.css']
})
export class FilterSectionComponent {
  showDropdown = false;
  filterGroup = 0;

  onClick() {
    alert("Filter Out Some Stuff");
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
    console.log(this.showDropdown);
  }

  filterClick(value: any) {
    this.filterGroup = value;
    this.showDropdown = false;
  }
}
