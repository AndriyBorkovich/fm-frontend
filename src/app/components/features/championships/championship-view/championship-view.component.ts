import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SeasonTableComponent } from '../season-table/season-table.component';
import { SeasonTopScorersComponent } from '../season-top-scorers/season-top-scorers.component';
import { SeasonTopAssistantsComponent } from '../season-top-assistants/season-top-assistants.component';
import { ActivatedRoute } from '@angular/router';
import { SeasonService } from '../../../../services/season.service';
import { Season } from '../../../../models/season';

@Component({
  selector: 'app-championship-view',
  standalone: true,
  imports: [NgIf, NgFor, SeasonTableComponent, SeasonTopScorersComponent, SeasonTopAssistantsComponent],
  templateUrl: './championship-view.component.html',
  styles: ``
})
export class ChampionshipViewComponent implements OnInit {
  activeTab = 'table';
  leagueName = '';
  selectedSeasonId: number;

  seasons : Season[] = [];

  constructor(private route: ActivatedRoute, private seasonService: SeasonService) { }

  ngOnInit(): void {
    const leagueId = +this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe(params => {
      this.leagueName = params['name'];
    });

    this.seasonService.getSeasonsByChampId(leagueId).subscribe((response) => {
      this.seasons = response;
      this.selectedSeasonId = this.seasons[0].seasonId;
    })
  }

  selectSeason(seasonId: number): void {
    this.selectedSeasonId = seasonId;
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
