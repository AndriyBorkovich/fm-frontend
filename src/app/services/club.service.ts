import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Club } from '../models/club';
import { environment } from '../../environments/environment.development';
import { GetAllClubsShortInfoRequestDto } from '../dtos/requests/getAllClubsShortInfoRequestDto';
import { ListResponse } from '../models/listResponse';
import { MatchResultResponse } from '../dtos/responses/matchResultResponse';
import { GetClubWithMatchHistoryRequest } from '../dtos/requests/getClubWithMatchHistoryRequest';
import { GetClubByIdWithStatsResponse } from '../dtos/responses/getClubByIdWithStatsResponse';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private baseUrl = `${environment.apiUrl}Club`;
  constructor(private http: HttpClient) { }

  getAllShortInfo(request: GetAllClubsShortInfoRequestDto) {
    return this.http.get<ListResponse<Club>>(`${this.baseUrl}/GetAllShortInfo?Pagination.PageSize=${request.pagination.pageSize}&Pagination.PageNumber=${request.pagination.pageNumber}`);
  }

  getMatchHistory(query: GetClubWithMatchHistoryRequest) {
    return this.http.get<ListResponse<MatchResultResponse>>(`${this.baseUrl}/GetMatchHistory?Id=${query.id}&Pagination.PageSize=${query.pagination.pageSize}&Pagination.PageNumber=${query.pagination.pageNumber}`);
  }

  getById(id: number) {
    return this.http.get<GetClubByIdWithStatsResponse>(`${this.baseUrl}/GetById/${id}`);
  }
}
