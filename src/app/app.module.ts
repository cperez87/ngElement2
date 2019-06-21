import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatIconModule, MatInputModule, MatButtonModule, MatDialogModule } from '@angular/material';

// import { AppComponent } from './app.component';
import { RemittanceTransferComponent, DataExampleDialog } from './remittance-transfer/remittance-transfer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PageShellComponent } from './page-shell/page-shell.component';

import { OverlayContainer } from '@angular/cdk/overlay';
import { CdkOverlayContainer } from './cdk-overlay-container';
import { CdkOverlayContainerDirective } from './cdk-overlay-container.directive';

@NgModule({
  declarations: [
    // AppComponent,
    CdkOverlayContainerDirective,
    PageShellComponent,
    RemittanceTransferComponent,
    DataExampleDialog
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    { provide: OverlayContainer, useClass: CdkOverlayContainer }
  ],
  entryComponents: [PageShellComponent, RemittanceTransferComponent, DataExampleDialog],
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
