import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCards(): Observable<Array<Card>>{
    return this.httpClient.get<Array<Card>>('/api/skills');
  }

  public updateCardLikeCount(card: Card): Observable<any>{
    return this.httpClient.put<any>(`/api/skills/${card.id}`, card);
  }
}
