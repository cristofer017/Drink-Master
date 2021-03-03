import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'drinks-consumed-list',
  templateUrl: './drinks-consumed-list.component.html',
  styleUrls: ['./drinks-consumed-list.component.scss'],
})
export class DrinksConsumedListComponent implements OnInit {

  drinksConsumed: Array<{date: string; alcPercentage: number, value: number}>;


  constructor() {
    this.drinksConsumed = [
      {
        date: '21.03.2021',
        alcPercentage: 0.231,
        value: 20,
      },
      {
        date: '22.03.2021',
        alcPercentage: 0.111,
        value: 11,
      },
    ];
  }


  ngOnInit() {
  }

}
