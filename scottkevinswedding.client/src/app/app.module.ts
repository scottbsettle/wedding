import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//primeng Imports 
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';

//custom components 
import { MenuBarComponent } from './nav/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { SongPickComponent } from './pages/song-pick/song-pick.component';
import { PictureSlideComponent } from './pages/home/picture-slide/picture-slide.component';
import { RoomReservationsComponent } from './pages/room-reservations/room-reservations.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    SongPickComponent,
    PictureSlideComponent,
    RoomReservationsComponent,
    RsvpComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
