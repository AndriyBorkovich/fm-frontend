
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClubService } from '../../../../services/club.service';
import { NgFor, NgIf } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ClubPlayersViewComponent } from '../club-players-view/club-players-view.component';
import { ClubMatchHistoryComponent } from '../club-match-history/club-match-history.component';
import { GetClubByIdWithStatsResponse } from '../../../../dtos/responses/getClubByIdWithStatsResponse';
@Component({
  selector: 'app-club-view',
  standalone: true,
  imports: [NgIf, NgFor, MatProgressSpinner, ClubPlayersViewComponent, ClubMatchHistoryComponent],
  templateUrl: './club-view.component.html',
  styles: ``
})
export class ClubViewComponent implements OnInit {
  clubId: number = 0;
  activeTab: string = 'overview';
  clubDetails: GetClubByIdWithStatsResponse = {
    clubName: '',
    coachName: '',
    stadiumName: '',
    participatedChampionships: '',
    averageSquadAge: 0,
    totalPlayedMatches: 0,
    wins: 0,
    losses: 0,
    draws: 0,
    scoredGoals: 0,
    concededGoals: 0
  };

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  constructor(private route: ActivatedRoute, private clubService: ClubService) { }

  ngOnInit(): void {
    this.clubId = +this.route.snapshot.paramMap.get('id');
    this.loadClubDetails();
  }

  private loadClubDetails() {
    this.clubService.getById(this.clubId).subscribe(
      (data) => {
        this.clubDetails = data;
      }
    );
  }
}
