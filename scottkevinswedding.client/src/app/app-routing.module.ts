import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SongPickComponent } from './pages/song-pick/song-pick.component';
import { RoomReservationsComponent } from './pages/room-reservations/room-reservations.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { PhotoGallaryComponent } from './pages/photo-gallary/photo-gallary.component';

const routes: Routes = [ 
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'song-pick', component: SongPickComponent},
  {path: 'room-reservation', component: RoomReservationsComponent },
  {path: 'rsvp', component: RsvpComponent},
  {path: 'photo-gallary', component: PhotoGallaryComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
