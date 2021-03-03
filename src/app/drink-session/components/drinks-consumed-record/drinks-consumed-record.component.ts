import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'drinks-consumed-record',
  templateUrl: './drinks-consumed-record.component.html',
  styleUrls: ['./drinks-consumed-record.component.scss'],
})
export class DrinksConsumedRecordComponent implements OnInit {

  @Input() item: {date: string; icon: string; alcVolume: string; alcPercentage: number};

  constructor() { }

  ngOnInit() {}

}
