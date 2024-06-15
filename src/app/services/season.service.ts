import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { GetSeasonTableResponse } from '../dtos/responses/getSeasonTableResponse';
import { Season } from '../models/season';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  private baseUrl = `${environment.apiUrl}Season`
  constructor(private http: HttpClient) { }

  getTable(id: number) {
    return this.http.get<GetSeasonTableResponse[]>(`${this.baseUrl}/GetTable/${id}`);
  }

  getSeasonsByChampId(championshipId: number) {
    return this.http.get<Season[]>(`${this.baseUrl}/GetChampionshipSeasons/${championshipId}`);
  }
}
