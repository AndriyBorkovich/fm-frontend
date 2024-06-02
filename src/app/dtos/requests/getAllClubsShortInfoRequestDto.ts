import { Pagination } from "../../models/pagination";

export class GetAllClubsShortInfoRequestDto
{
    constructor(
        public pagination: Pagination
    ) { }
}