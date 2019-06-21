import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-remittance-transfer',
  templateUrl: './remittance-transfer.component.html',
  styleUrls: ['./remittance-transfer.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class RemittanceTransferComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  openDialog() {
    this.dialog.open(DataExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  }

}

export interface Food {
  value: string;
  viewValue: string;
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
