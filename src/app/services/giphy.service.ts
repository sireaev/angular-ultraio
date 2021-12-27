import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  private searchRoute: string = 'search';
  private trendingRoute: string = 'trending';
  constructor(private http: HttpClient) {}

  get(params: any): Observable<any> {
    params.api_key = environment.giphykey;
    if (params.q) {
      return this.http.get<any>(`${environment.giphyapi}/${this.searchRoute}`, {
        params,
      });
    }

    return this.http.get<any>(`${environment.giphyapi}/${this.trendingRoute}`, {
      params,
    });
  }
}
