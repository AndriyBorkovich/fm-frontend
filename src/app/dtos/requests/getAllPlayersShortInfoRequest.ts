import { Pagination } from '../../models/pagination';

export class GetAllPlayersShortInfoRequest {
  clubId?: number;
  pagination: Pagination;

  constructor(pagination: Pagination, clubId?: number) {
    this.clubId = clubId;
    this.pagination = pagination;
  }
}