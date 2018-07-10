import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewRelases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCEa_gT_74LOjpE3XNts6VuzVfrCNwdJC6faPa3NkCYo4B_9qnUu9BAyLQBGywCCYB07HKOGYoOhWgo4gQ'
    });

    return this.http.get('	https://api.spotify.com/v1/browse/new-releases', { headers });

  }
}
