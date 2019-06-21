import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { RemittanceTransferComponent } from './remittance-transfer/remittance-transfer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RemittanceTransferComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  entryComponents: [RemittanceTransferComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(RemittanceTransferComponent, { injector });
    customElements.define('page-remittance-transfer', custom);
  }

  ngDoBootstrap() {}
}
