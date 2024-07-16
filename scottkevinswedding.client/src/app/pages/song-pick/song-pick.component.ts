import { Component } from '@angular/core';
import { SongPick } from '../../DTOs';

@Component({
  selector: 'app-song-pick',
  templateUrl: './song-pick.component.html',
  styleUrl: './song-pick.component.css'
})
export class SongPickComponent {

  songPick: SongPick = {
    title: '',
    artists: '',
    guestName: '',
    votes: 0
  };
  songPicks: SongPick[] = [{
    title: 'Sulk',
    artists: 'TR/ST',
    guestName: 'Scott Settle',
    votes: 0
  },{
    title: 'Sulk',
    artists: 'TR/ST',
    guestName: 'Scott Settle',
    votes: 0
  },{
    title: 'Sulk',
    artists: 'TR/ST',
    guestName: 'Scott Settle',
    votes: 0
  },{
    title: 'Sulk',
    artists: 'TR/ST',
    guestName: 'Scott Settle',
    votes: 0
  }];
}
