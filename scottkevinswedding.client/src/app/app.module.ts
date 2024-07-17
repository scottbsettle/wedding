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
import { GalleriaModule } from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';

//custom components 
import { MenuBarComponent } from './nav/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { SongPickComponent } from './pages/song-pick/song-pick.component';
import { PictureSlideComponent } from './pages/home/picture-slide/picture-slide.component';
import { RoomReservationsComponent } from './pages/room-reservations/room-reservations.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { PhotoGallaryComponent } from './pages/photo-gallary/photo-gallary.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    SongPickComponent,
    PictureSlideComponent,
    RoomReservationsComponent,
    RsvpComponent,
    PhotoGallaryComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    AccordionModule,
    GalleriaModule,
    TabViewModule,
    CheckboxModule,
    InputTextareaModule,
    IconFieldModule,
    InputIconModule,
    TagModule,
    MultiSelectModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
