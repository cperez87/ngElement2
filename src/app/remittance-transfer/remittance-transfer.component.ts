import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'app-remittance-transfer',
  templateUrl: './remittance-transfer.component.html',
  styleUrls: ['./remittance-transfer.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class RemittanceTransferComponent implements OnInit {
  @HostBinding('class.mat-typography') useMatTypography = true;
  constructor() { }

  ngOnInit() {
  }

}
