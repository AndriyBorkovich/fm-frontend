import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {initFlowbite} from "flowbite";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'football-manager-ui';

  ngOnInit() {
    initFlowbite();
  }
}
