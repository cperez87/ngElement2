import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-page-shell',
  styleUrls: ['./page-shell.component.scss'],
  template: `<slot></slot>`,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PageShellComponent implements OnInit {
  @HostBinding('class.mat-typography') useMatTypography = true;
  constructor() { }

  ngOnInit() {
  }

}
