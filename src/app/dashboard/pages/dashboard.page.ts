import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, delay, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  startDateDrink: string;
  finished = false;
  actionsOpened: boolean;
  requests$ = from([
    of({value: 60, name: '0.60'}).pipe(delay(1600)),
    of({value: 40, name: '0.40'}).pipe(delay(2000)),
    of({value: 20, name: '20'}).pipe(delay(2300))
  ]).pipe(
    startWith(of({value: 100, name: 'Initializing'})),
    concatAll()
  );
  constructor() {
    this.startDateDrink = '2019-10-01T15:43:40.394Z'
  }

  ngOnInit() {
  }

  onActionsToggled(value: boolean) {
    this.actionsOpened = value;
  }

}
