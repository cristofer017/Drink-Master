import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  finished = false;
  actionsOpened: boolean;
  opened: boolean;

  constructor(private readonly router: Router) {
  }

  ngOnInit() {
  }

  onActionsToggled(value: boolean) {
    this.actionsOpened = value;
  }

}
