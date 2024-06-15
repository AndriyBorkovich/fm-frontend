import { Component, Input, OnInit } from '@angular/core';
import { TopAssistant } from '../../../../dtos/responses/getTopPlayersOfSeasonResponse';
import { StatisticsService } from '../../../../services/statistics.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-season-top-assistants',
  standalone: true,
  imports: [NgFor],
  templateUrl: './season-top-assistants.component.html',
  styles: ``
})
export class SeasonTopAssistantsComponent implements OnInit {
  @Input() seasonId: number;
  data: TopAssistant[] = [];

  constructor(private statsService: StatisticsService, private router: Router) {}
  ngOnInit(): void {
    this.statsService.getSeasonTopAssistants(this.seasonId).subscribe((response) => {
      this.data = response;
    });
  }

  navigateToPlayer(id: number) {
    this.router.navigate(['/players', id]);
  }
}
