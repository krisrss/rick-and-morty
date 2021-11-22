import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locationsList: any = "";
  locationsListById: string = '';

  constructor(private router: Router, private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.locationsListById = this.route.snapshot.params['ids'];
    this.setDefaultData();
  }

  setDefaultData() {
    if (this.locationsListById === undefined) {
      this.apiService.getLocations().subscribe((data) => {
        this.locationsList = data;
      },() => this.router.navigate(['/errorpage']));
    }
    else {
      this.apiService.getLocationsByIds(this.locationsListById).subscribe((data) => {

        if (this.locationsListById.includes(',') === true) {
          let characters = { results: data };
          this.locationsList = characters;
        }
        else {
          let characters = { results: [data] };
          this.locationsList = characters;
        }

      },() => this.router.navigate(['/errorpage']));
    }
  }

  public paginateApp(date: any): void {
    this.locationsList = date;
  }

  public applyFilters(locFilters: any): void {
    if (locFilters.name === "" && locFilters.dimension === "") {
      this.setDefaultData();
    }
    else if (locFilters.name !== "" && locFilters.dimension !== "") {
      this.apiService.getLocationsByNameAndDimension(locFilters.name, locFilters.dimension).subscribe((data) => {
        this.locationsList = data;
      },() => this.router.navigate(['/errorpage']));
    }
    else if (locFilters.name !== "") {
      this.apiService.getLocationsByName(locFilters.name).subscribe((data) => {
        this.locationsList = data;
      },() => this.router.navigate(['/errorpage']));
    }
    else if (locFilters.dimension !== "") {
      this.apiService.getLocationsByDimension(locFilters.dimension).subscribe((data) => {
        this.locationsList = data;
      },() => this.router.navigate(['/errorpage']));
    }
  }
}
