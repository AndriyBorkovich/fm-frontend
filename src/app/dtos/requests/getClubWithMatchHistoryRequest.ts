import { Pagination } from "../../models/pagination";

export class GetClubWithMatchHistoryRequest {
    id: number;
    pagination: Pagination;
  
    constructor(id: number, pagination: Pagination) {
      this.id = id;
      this.pagination = pagination;
    }
}