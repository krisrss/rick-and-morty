import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-residents-list',
  templateUrl: './residents-list.component.html',
  styleUrls: ['./residents-list.component.scss']
})
export class ResidentsListComponent implements OnInit {
  loadedCharacters: any = [];

  constructor(private apiService: ApiService) { }

  @Input() data = '';
  charactersList: any = '';
  concatNumbers: any = '';

  ngOnInit(): void {
    for (let i = 0; i < this.data.length; i++) {
      if (i !== this.data.length - 1) {
        this.concatNumbers += `${this.data[i].split('/')[5]},`;
      }
      else {
        this.concatNumbers += `${this.data[i].split('/')[5]}`;
      }
    }

    this.apiService.getCharsByIds(this.concatNumbers).subscribe((data) => {
      if (this.data.length <= 1) {
        this.charactersList = [data];
      }
      else {
        this.charactersList = data;
      }
    })
  }
}
