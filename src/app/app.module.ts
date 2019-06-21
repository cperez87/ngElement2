import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatIconModule, MatInputModule } from '@angular/material';

// import { AppComponent } from './app.component';
import { RemittanceTransferComponent } from './remittance-transfer/remittance-transfer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PageShellComponent } from './page-shell/page-shell.component';

@NgModule({
  declarations: [
    // AppComponent,
    PageShellComponent,
    RemittanceTransferComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  entryComponents: [PageShellComponent, RemittanceTransferComponent],
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const pageShell = createCustomElement(PageShellComponent, { injector });
    customElements.define('app-page-shell', pageShell);

    const remittanceTransfer = createCustomElement(RemittanceTransferComponent, { injector });
    customElements.define('page-remittance-transfer', remittanceTransfer);
  }

  ngDoBootstrap() {}
}
