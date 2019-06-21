import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemittanceTransferComponent } from './remittance-transfer.component';

describe('RemittanceTransferComponent', () => {
  let component: RemittanceTransferComponent;
  let fixture: ComponentFixture<RemittanceTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemittanceTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemittanceTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
