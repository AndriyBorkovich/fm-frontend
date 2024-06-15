import { Component, Input, OnInit } from '@angular/core';
import { GetSeasonTableResponse } from '../../../../dtos/responses/getSeasonTableResponse';
import { SeasonService } from '../../../../services/season.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-season-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './season-table.component.html',
  styles: ``
})
export class SeasonTableComponent implements OnInit {
  @Input() seasonId: number;
  seasonTable: GetSeasonTableResponse[] = [];

  constructor(private seasonService: SeasonService) {}
  ngOnInit(): void {
    this.seasonService.getTable(this.seasonId).subscribe((response) => {
      this.seasonTable = response;
    });
  }
}
