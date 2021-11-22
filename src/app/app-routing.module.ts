import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { LocationsComponent } from './locations/locations.component';
import { TitlepageComponent } from './titlepage/titlepage.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: 'characters/:ids', component: CharactersComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'locations/:ids', component: LocationsComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'episodes/:ids', component: EpisodesComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'errorpage', component: ErrorPageComponent },
  { path: '', component: TitlepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
