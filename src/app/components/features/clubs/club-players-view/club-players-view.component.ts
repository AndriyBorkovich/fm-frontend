import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { GetAllPlayersShortInfoResponse } from '../../../../dtos/responses/getAllPlayersShortInfoResponse';
import { PlayerService } from '../../../../services/player.service';
import { GetAllPlayersShortInfoRequest } from '../../../../dtos/requests/getAllPlayersShortInfoRequest';
import { Pagination } from '../../../../models/pagination';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PaginatorComponent } from '../../../paginator/paginator.component';

@Component({
  selector: 'app-club-players-view',
  standalone: true,
  imports: [NgIf, NgFor, MatProgressSpinner, PaginatorComponent],
  templateUrl: './club-players-view.component.html',
  styles: ``
})
export class ClubPlayersViewComponent implements OnInit {
  @Input() clubId: number;
  players: GetAllPlayersShortInfoResponse[] = [];
  totalItems = 0;
  pageSize = 10;
  currentPage = 0;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getAll();
  }

  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getAll();
  }

  private getAll() {
    let query = new GetAllPlayersShortInfoRequest(
      new Pagination(this.currentPage + 1, this.pageSize), this.clubId);
      
    this.playerService.getAllShortInfo(query).subscribe((response) => {
      this.players = response.result;
      this.totalItems = response.total;
    });
  }
}
