import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  charactersList: any = "";
  genderList = ["Female", "Male", "Genderless", "Unknown"];
  charactersListById: string = '';
  concatNumbers: any = '';


  constructor(private router: Router, private apiService: ApiService, private route: ActivatedRoute) { }

  setDefaultData() {
    if (this.charactersListById === undefined) {
      this.apiService.getChars().subscribe((data) => {
        this.charactersList = data;
      },() => this.router.navigate(['/errorpage']));
    }
    else {
      this.apiService.getCharsByIds(this.charactersListById).subscribe((data) => {
        if (this.charactersListById.includes(',') === true) {
          let characters = { results: data };
          this.charactersList = characters;
        }
        else {
          let characters = { results: [data] };
          this.charactersList = characters;
        }
      },() => this.router.navigate(['/errorpage']));
    }
  }

  public paginateApp(date: any): void {
    this.charactersList = date;
  }

  extractedId(url: string) {
    return url.split('/')[5]
  }

  extractMultipleIds(episodeLength: any, episodeList: any) {
    var concatNumbers = '';
    for (let i = 0; i < episodeLength; i++) {
      if (i !== episodeLength - 1) {
        concatNumbers += `${episodeList[i].split('/')[5]},`;
      }
      else {
        concatNumbers += `${episodeList[i].split('/')[5]}`;
      }
    }
    return concatNumbers;
  }

  ngOnInit(): void {
    this.charactersListById = this.route.snapshot.params['ids'];
    this.setDefaultData();
  }

  public applyFilters(userInput: any): void {
    if (userInput.charName === "" && userInput.charGender === "") {
      this.setDefaultData();
    }
    else if (userInput.charName !== "" && userInput.charGender !== "") {
      this.apiService.getCharsByNameAndGender(userInput.charName, userInput.charGender).subscribe((data) => {
        this.charactersList = data;
      },() => this.router.navigate(['/errorpage']));
    }
    else if (userInput.charName !== "") {
      this.apiService.getCharsByName(userInput.charName).subscribe((data) => {
        this.charactersList = data;
      }, () => this.router.navigate(['/errorpage']));
    }
    else if (userInput.charGender !== "") {
      this.apiService.getCharsByGender(userInput.charGender).subscribe((data) => {
        this.charactersList = data;
      },() => this.router.navigate(['/errorpage']));
    }

  }
}
