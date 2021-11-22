import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodesList: any = "";
  episodesListById: string = '';

  currentCharName = "";
  currentCharDim = "";

  constructor(private router: Router, private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.currentCharName = history.state.charName;
    this.currentCharDim = history.state.charDimension;
    this.episodesListById = this.route.snapshot.params['ids'];
    this.setDefaultData();
  }

  setDefaultData() {
    if (this.episodesListById === undefined) {
      this.apiService.getEpisodes().subscribe((data) => {
        this.episodesList = data;
      }, () => this.router.navigate(['/errorpage']));
    }
    else {
      this.apiService.getEpisodesByIds(this.episodesListById).subscribe((data) => {
        if (this.episodesListById.includes(',') === true) {
          let episodes = { results: data };
          this.episodesList = episodes;
        }
        else {
          let episodes = { results: [data] };
          this.episodesList = episodes;
        }

      }, () => this.router.navigate(['/errorpage']));
    }

  }

  public paginateApp(date: any): void {
    this.episodesList = date;
  }

  public applyFilters(episodeFilter: any): void {
    if (episodeFilter.name === "") {
      this.setDefaultData();
    }
    else if (episodeFilter.name !== "") {
      this.apiService.getEpisodesByName(episodeFilter.name).subscribe((data) => {
        this.episodesList = data;
      }, () => this.router.navigate(['/errorpage']));
    }
  }

}
