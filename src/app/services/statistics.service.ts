import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TopAssistant, TopScorer } from '../dtos/responses/getTopPlayersOfSeasonResponse';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private baseUrl = `${environment.apiUrl}Statistics`
  constructor(private http: HttpClient) { }

  getSeasonTopScorers(seasonId: number) {
    return this.http.get<TopScorer[]>(`${this.baseUrl}/GetSeasonTopScorers/${seasonId}`);
  }

  getSeasonTopAssistants(seasonId: number) {
    return this.http.get<TopAssistant[]>(`${this.baseUrl}/GetSeasonTopAssistants/${seasonId}`);
  }
}
