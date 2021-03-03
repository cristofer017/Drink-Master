import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

import { IonFab } from '@ionic/angular';

import { SettingsActionInterface } from '../../structures/settings-action.interface';


@Component({
  selector: 'settings-actions',
  templateUrl: './settings-actions.component.html',
})

export class SettingsActionsComponent implements OnInit, OnChanges {

  @ViewChild(IonFab) fab: IonFab;
  @Input() backButtonPressed: Subject<boolean>;
  @Output() openToggled: EventEmitter<boolean>;

  settingsActions: Array<SettingsActionInterface>;
  allSettingsActions: {[key: string]: SettingsActionInterface};
  opened: boolean;


  constructor(
  ) {
    this.openToggled = new EventEmitter();
    this.allSettingsActions = {
      domestic_payment: {
        settingsTranslationKey: 'USER_DATA',
        redirectPath: 'settings/user-data',
      },
      add_drink: {
        settingsTranslationKey: 'ADD_DRINK',
        redirectPath: 'settings/add-drink',
      },
    };
  }


  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges) {
  }


  showActionList() {
    this.opened = !this.opened;
    this.openToggled.emit(this.opened);
    if (this.opened) {
      this.fab.close();
    }
  }


  onSettingActionClick(path: string) {
    this.opened = false;
    this.fab.close();
  }


  closeActionList() {
    this.opened = false;
    this.openToggled.emit(this.opened);
  }

}
