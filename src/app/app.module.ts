import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { MatIconModule, MatInputModule, MatButtonModule, MatDialogModule, MatStepperModule,
  MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

// import { AppComponent } from './app.component';
import { RemittanceTransferComponent, DataExampleDialog } from './remittance-transfer/remittance-transfer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PageShellComponent } from './page-shell/page-shell.component';

import { OverlayContainer } from '@angular/cdk/overlay';
import { CdkOverlayContainer } from './cdk-overlay-container';
import { CdkOverlayContainerDirective } from './cdk-overlay-container.directive';
import { AppOverlayContainer } from './custom-overlay-container';

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
    OverlayModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatStepperModule
  ],
  providers: [
    { provide: OverlayContainer, useClass: CdkOverlayContainer }
    // { provide: OverlayContainer, useFactory: () => new AppOverlayContainer(null) }
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
