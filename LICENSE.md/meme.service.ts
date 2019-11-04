import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(private http: HttpClient) { }

  getMeme(): Observable<any>{
    return this.http.get("https://api.pokemontcg.io/v1/cards?id=xy7-54");
  }
}
