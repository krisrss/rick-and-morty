import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-characters-filter',
  templateUrl: './characters-filter.component.html',
  styleUrls: ['./characters-filter.component.scss']
})
export class CharactersFilterComponent implements OnInit {

  gendersList = ["Female", "Male", "Genderless", "Unknown"];
  dropdownSelect: string = "";
  userInput: string = "";

  @Output() userFilters = new EventEmitter<any>();

  ngOnInit(): void {
  }

  onFilterSubmit() {
    this.userFilters.emit({ charName: this.userInput, charGender: this.dropdownSelect });
  }

}
