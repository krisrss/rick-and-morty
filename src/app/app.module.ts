import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { LocationsComponent } from './locations/locations.component';
import { TitlepageComponent } from './titlepage/titlepage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CharactersFilterComponent } from './characters-filter/characters-filter.component';
import { LocationsFilterComponent } from './locations-filter/locations-filter.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ResidentsListComponent } from './residents-list/residents-list.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { EpisodesFilterComponent } from './episodes-filter/episodes-filter.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    LocationsComponent,
    TitlepageComponent,
    CharactersFilterComponent,
    LocationsFilterComponent,
    PaginationComponent,
    ResidentsListComponent,
    EpisodesComponent,
    EpisodesFilterComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
