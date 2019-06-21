import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-remittance-transfer',
  templateUrl: './remittance-transfer.component.html',
  styleUrls: ['./remittance-transfer.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class RemittanceTransferComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(DataExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  }

}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'data-example-dialog',
  templateUrl: 'data-example-dialog.html'
})
// tslint:disable-next-line:component-class-suffix
export class DataExampleDialog {
  @HostBinding('class.mat-typography') use = true;
  constructor() {}
}
