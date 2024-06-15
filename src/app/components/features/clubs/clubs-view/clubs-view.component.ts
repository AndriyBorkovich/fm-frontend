import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator'
import { MatProgressSpinnerModule,} from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Observable, map, startWith } from 'rxjs';
import { Club } from '../../../../models/club';
import { ClubService } from '../../../../services/club.service';
import { GetAllClubsShortInfoRequestDto } from '../../../../dtos/requests/getAllClubsShortInfoRequestDto';
import { Pagination } from '../../../../models/pagination';
import { HasAnyAppRoleDirective } from '../../../../directives/has-any-app-role.directive';
import { Router } from '@angular/router';
import { PaginatorComponent } from '../../../paginator/paginator.component';
@Component({
  selector: 'app-clubs-view',
  standalone: true,
  imports: [
    NgIf,
    MatIconModule,
    PaginatorComponent,
    MatProgressSpinnerModule,
    MatTooltipModule,
    AsyncPipe,
    HasAnyAppRoleDirective
  ],
  templateUrl: './clubs-view.component.html',
  styles: ``
})
export class ClubsViewComponent {
  clubs$: Observable<Club[]>;
  totalItems$: Observable<number>;
  pageSize = 5;
  currentPage = 0;

  constructor(private clubService: ClubService, private router: Router) {}

  ngOnInit(): void {
    this.getAllClubs();
  }

  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getAllClubs();
  }

  navigateToClubDetails(id: number): void {
    this.router.navigate(['/clubs', id]);
  }

  private getAllClubs() {
    const response$ = this.clubService.getAllShortInfo(
      new GetAllClubsShortInfoRequestDto(
        new Pagination(this.currentPage + 1, this.pageSize))
    );

    this.clubs$ = response$.pipe(map((response) => response.result));
    this.totalItems$ = response$.pipe(
      map((response) => response.total),
      startWith(0)
    );
  }
}
