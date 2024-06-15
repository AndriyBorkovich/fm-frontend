import { Component, Input, OnInit } from '@angular/core';
import { GetClubWithMatchHistoryRequest } from '../../../../dtos/requests/getClubWithMatchHistoryRequest';
import { ClubService } from '../../../../services/club.service';
import { Pagination } from '../../../../models/pagination';
import { MatchResultResponse } from '../../../../dtos/responses/matchResultResponse';
import { NgFor, NgIf } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { PageEvent } from '@angular/material/paginator';
import { PaginatorComponent } from "../../../paginator/paginator.component";

@Component({
    selector: 'app-club-match-history',
    standalone: true,
    templateUrl: './club-match-history.component.html',
    styles: ``,
    imports: [NgIf, NgFor, MatProgressSpinner, PaginatorComponent]
})
export class ClubMatchHistoryComponent implements OnInit {
  @Input() clubId: number;
  pageSize = 5;
  currentPage = 0;
  matchHistory: MatchResultResponse[] = [];
  totalItems = 0;

  constructor(private clubService: ClubService) {}

  ngOnInit() {
    this.loadMatchHistory();
  }

  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadMatchHistory();
  }

  private loadMatchHistory() {
    const query = new GetClubWithMatchHistoryRequest(
      this.clubId, 
      new Pagination(this.currentPage + 1, this.pageSize));
    this.clubService.getMatchHistory(query).subscribe((response) => {
      this.matchHistory = response.result;
      this.totalItems = response.total;
    });
  }
}
