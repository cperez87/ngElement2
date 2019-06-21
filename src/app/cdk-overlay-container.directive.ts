import { Directive, ElementRef } from '@angular/core';
import { CdkOverlayContainer } from './cdk-overlay-container';
import {OverlayContainer} from '@angular/cdk/overlay';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[myCdkOverlayContainer]'
})
export class CdkOverlayContainerDirective {
    constructor(
      protected elementReference: ElementRef,
      protected cdkOverlayContainer: OverlayContainer
      ) {
        this.elementReference    = elementReference;
        this.cdkOverlayContainer = cdkOverlayContainer;

        (this.cdkOverlayContainer as CdkOverlayContainer).myCreateContainer(this.elementReference.nativeElement);
    }
}
