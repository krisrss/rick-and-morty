import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-locations-filter',
  templateUrl: './locations-filter.component.html',
  styleUrls: ['./locations-filter.component.scss']
})
export class LocationsFilterComponent implements OnInit {

  nameInput: string = "";
  nameDimension: string = "";

  @Output() locFilters = new EventEmitter<any>();

  ngOnInit(): void {
  }

  onFilterSubmit() {
    this.locFilters.emit({ name: this.nameInput, dimension: this.nameDimension });
  }

}
