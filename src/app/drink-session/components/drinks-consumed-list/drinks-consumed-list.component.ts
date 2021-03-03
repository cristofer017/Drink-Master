import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'drinks-consumed-list',
  templateUrl: './drinks-consumed-list.component.html',
  styleUrls: ['./drinks-consumed-list.component.scss'],
})
export class DrinksConsumedListComponent implements OnInit {

  drinksConsumed: Array<{date: string; icon: string; alcVolume: string; alcPercentage: number}>;


  constructor() {
    this.drinksConsumed = [
      {
        date: '21.03.2021',
        icon: 'beer',
        alcVolume: '0.5',
        alcPercentage: 4.5,
      },
      {
        date: '22.03.2021',
        icon: 'beer',
        alcVolume: '0.5',
        alcPercentage: 4.5,
      },
      {
        date: '23.03.2021',
        icon: 'beer',
        alcVolume: '0.5',
        alcPercentage: 4.5,
      },
    ];
  }


  ngOnInit() {
  }

}
