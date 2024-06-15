import { Component, Input } from '@angular/core';
import { TopScorer } from '../../../../dtos/responses/getTopPlayersOfSeasonResponse';
import { StatisticsService } from '../../../../services/statistics.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-season-top-scorers',
  standalone: true,
  imports: [NgFor],
  templateUrl: './season-top-scorers.component.html',
  styles: ``
})
export class SeasonTopScorersComponent {
  @Input() seasonId: number;
  data: TopScorer[] = [];

  constructor(private statsService: StatisticsService, private router: Router) {}
  ngOnInit(): void {
    this.statsService.getSeasonTopScorers(this.seasonId).subscribe((response) => {
      this.data = response;
    });
  }

  navigateToPlayer(id: number) {
    this.router.navigate(['/players', id]);
  }
}
