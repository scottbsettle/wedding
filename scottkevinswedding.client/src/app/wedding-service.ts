import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Rsvp, SongPick } from './DTOs';

@Injectable({
  providedIn: 'root'
})

export class WeddingService {

  private readonly api: string = '/wedding'
  constructor(private http: HttpClient) { }

  getSongPicks(): Observable<SongPick[]> {
    const getSongPicksUrl: string = this.api + '/getSongPicks';
    return this.http.get<SongPick[]>(getSongPicksUrl).pipe(
      tap(() => { console.log('get song picks returned succefully') }
        , catchError(this.handleError('Error getting song pick List'))
      ));
  }

  getRsvp(): Observable<Rsvp[]> {
    const getSongPicksUrl: string = this.api + '/getRsvp';
    return this.http.get<Rsvp[]>(getSongPicksUrl).pipe(
      tap(() => { console.log('get Rsvp returned succefully') }
        , catchError(this.handleError('Error getting rsvp List'))
      ));
  }

  putSongPick(songPick: SongPick): Observable<SongPick> {
    const putSongPickUrl = this.api + '/putSongPick';
    return this.http.put<SongPick>(putSongPickUrl, songPick).pipe(
      tap(() => { console.log('put song pick returned succefully') }
        , catchError(this.handleError('Error putting song pick List'))
      ));
  }

  putRsvp(rsvp: Rsvp): Observable<Rsvp> {
    const putRsvpUrl = this.api + '/putRsvp';
    return this.http.put<Rsvp>(putRsvpUrl, rsvp).pipe(
      tap(() => { console.log('put RSVP returned succefully') }
        , catchError(this.handleError('Error putting RSVP'))
      ));
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: unknown): Observable<T> => {
      console.log(operation + 'failed');
      return of(result as T)
    }
  }
}
