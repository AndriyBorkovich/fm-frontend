import { Component } from '@angular/core';
import { League } from '../../../../models/league';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-leagues-list',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="container mx-auto mt-10 p-4 bg-green-100 shadow rounded-lg">
      <h1 class="text-2xl font-bold mb-6">Top 5 Leagues</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div *ngFor="let league of leagues" (click)="goToChampionship(league.id, league.name)" class="cursor-pointer">
          <img [src]="league.imageUrl" alt="{{ league.name }}" class="w-32 h-32 object-cover rounded-lg mb-2">
        </div>
      </div>
  </div>
  `,
  styles: ``
})
export class LeaguesListComponent {
  // hardcode from api side
  leagues: League[] = [
    { id: 2, name: 'Premier League', imageUrl: '../../../../../assets/images/premier-league.png' },
    { id: 3, name: 'La Liga', imageUrl: '../../../../../assets/images/la-liga.png' },
    { id: 4, name: 'Serie A', imageUrl: '../../../../../assets/images/serie-a.png' },
    { id: 5, name: 'Bundesliga', imageUrl: '../../../../../assets/images/bundesliga.png' },
    { id: 6, name: 'Ligue 1', imageUrl: '../../../../../assets/images/ligue-1.png' },
  ];

  constructor(private router: Router) { }

  goToChampionship(leagueId: number, leagueName: string): void {
    this.router.navigate(['/championships', leagueId], { queryParams: { name: leagueName } });
  }
}
