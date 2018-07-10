import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAwc1pHLrxJ_JeRjLuDrjQySyb_ZWuDFYi8qtfTKepwpaGyQCrfGHnoNahog5NozoGtudAjTqDf2fLa31f38sHjDlTooQRihmAk5z7kKgp64aaX-qby4bGJqlx6wM2x_0i9_hV_QlSQGpym'
    });


    return this.http.get(url, { headers });
  }

  getNewRelases() {
    return this.getQuery('browse/new-releases')
    .pipe( map( data => data['albums'].items));

  }

  getArtist(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist`)
    .pipe( map( data =>  data['artists'].items));

  }
}
