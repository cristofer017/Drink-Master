import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'drinks-consumed-record',
  templateUrl: './drinks-consumed-record.component.html',
  styleUrls: ['./drinks-consumed-record.component.scss'],
})
export class DrinksConsumedRecordComponent implements OnInit {

  @Input() item: {date: string; alcPercentage: number, value: number};

  itemDetails: {date: string; alcPercentage: number, value: number};


  constructor() {
  }


  ngOnInit() {
    this.itemDetails = this.item;
  }

}
