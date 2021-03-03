import { Component } from '@angular/core';
import { concatAll, delay, startWith } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {

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


  constructor(private readonly router: Router) {
    this.startDateDrink = '2019-10-01T15:43:40.394Z'
  }


  onActionsToggled(value: boolean) {
    this.actionsOpened = value;
  }


  startSession() {
    this.router.navigate(['./drink-session']);
  }

}
