import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { GetAllPlayersShortInfoRequest } from '../dtos/requests/getAllPlayersShortInfoRequest';
import { GetAllPlayersShortInfoResponse } from '../dtos/responses/getAllPlayersShortInfoResponse';
import { ListResponse } from '../models/listResponse';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseUrl = `${environment.apiUrl}Player`;

  constructor(private http: HttpClient) { }

  getAllShortInfo(request: GetAllPlayersShortInfoRequest) {
    let url = `${this.baseUrl}/GetAllShortInfo?Pagination.PageSize=${request.pagination.pageSize}&Pagination.PageNumber=${request.pagination.pageNumber}`;
    if (request.clubId !== undefined && request.clubId !== null) {
      url += `&ClubId=${request.clubId}`;
    }
    
    return this.http.get<ListResponse<GetAllPlayersShortInfoResponse>>(url);
  }
}
