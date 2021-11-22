import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-episodes-filter',
  templateUrl: './episodes-filter.component.html',
  styleUrls: ['./episodes-filter.component.scss']
})
export class EpisodesFilterComponent implements OnInit {

  nameInput: string = "";
  @Output() episodeFilter = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  onFilterSubmit() {
    this.episodeFilter.emit({ name: this.nameInput});
  }

}
