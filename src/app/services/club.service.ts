import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Club } from '../models/club';
import { environment } from '../../environments/environment.development';
import { GetAllClubsShortInfoRequestDto } from '../dtos/requests/getAllClubsShortInfoRequestDto';
import { ListResponse } from '../models/listResponse';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private baseUrl = `${environment.apiUrl}Club`;
  constructor(private http: HttpClient) { }

  getAllShortInfo(request: GetAllClubsShortInfoRequestDto) {
    return this.http.get<ListResponse<Club>>(`${this.baseUrl}/GetAllShortInfo?Pagination.PageSize=${request.pagination.pageSize}
    &Pagination.PageNumber=${request.pagination.pageNumber}`);
  }
}
