import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styles: ``
})
export class NavBarComponent {

}
