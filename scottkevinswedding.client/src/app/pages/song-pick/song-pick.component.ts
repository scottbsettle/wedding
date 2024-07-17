import { Component, OnInit } from '@angular/core';
import { SongPick } from '../../DTOs';
import { WeddingService } from '../../wedding-service';

@Component({
  selector: 'app-song-pick',
  templateUrl: './song-pick.component.html',
  styleUrl: './song-pick.component.css'
})
export class SongPickComponent implements OnInit {

  songPick: SongPick = {
    title: '',
    artists: '',
    guestName: '',
    votes: 0
  };
  songPicks: SongPick[] = [];
  constructor(private readonly weddingService: WeddingService) {}

  ngOnInit(): void {
    this.weddingService.getSongPicks().subscribe((data) => {
      this.songPicks = data;
    })
  }

}
