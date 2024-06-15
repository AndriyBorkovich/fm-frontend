import { Component, OnInit } from '@angular/core';
import { GetPlayerWithStatsResponse } from '../../../../dtos/responses/getPlayerWithStatsResponse';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../../../services/player.service';

@Component({
  selector: 'app-player-view',
  standalone: true,
  imports: [],
  templateUrl: './player-view.component.html',
  styles: ``
})
export class PlayerViewComponent implements OnInit {
  playerId: number;
  player: GetPlayerWithStatsResponse;

  constructor(private route: ActivatedRoute, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerId = +this.route.snapshot.paramMap.get('id');
    this.playerService.getById(this.playerId).subscribe((response) => {
      this.player = response;
    });
  }
}
