import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [MatPaginator],
  template: `
    <mat-paginator [length]="length"
               [showFirstLastButtons]="true"
               [pageSize]="pageSize"
               [pageSizeOptions]="[5, 10, 25, 50]"
               [pageIndex]="pageIndex"
               (page)="onPageEvent($event)">
</mat-paginator>
  `,
  styles: `
  
  mat-paginator {
    background-color: transparent;
  }

//  .mat-paginator .mat-mdc-paginator-page-size-select .mat-mdc-form-field-outline {
//       border-color: black; /* Outline color */
//   }

//   .mat-paginator .mat-mdc-paginator-page-size-select .mat-mdc-form-field-outline-start,
//   .mat-paginator .mat-mdc-paginator-page-size-select .mat-mdc-form-field-outline-end,
//   .mat-paginator .mat-mdc-paginator-page-size-select .mat-mdc-form-field-outline-gap {
//     fill: black !important; /* Outline color */
//   }

//   .mat-paginator .mat-mdc-paginator-navigation-first,
//   .mat-paginator .mat-mdc-paginator-navigation-previous,
//   .mat-paginator .mat-mdc-paginator-navigation-next,
//   .mat-paginator .mat-mdc-paginator-navigation-last {
//     fill: black !important; /* Arrow color */
//   }

//   .mat-paginator .mat-mdc-paginator-range-label {
//       fill: black !important;/* Text color */
//     }
`
})
export class PaginatorComponent {
  @Input() length: number = 0;
  @Input() pageSize: number = 10;
  @Input() pageIndex: number = 0;

  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  onPageEvent(event: PageEvent): void {
    this.page.emit(event);
  }
}
