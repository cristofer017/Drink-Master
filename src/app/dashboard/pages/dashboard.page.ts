import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {

  finished = false;
  actionsOpened: boolean;
  opened: boolean;


  constructor(private readonly router: Router) {
  }


  onActionsToggled(value: boolean) {
    this.actionsOpened = value;
  }


  startSession() {
    this.router.navigate(['./drink-session']);
  }
}
