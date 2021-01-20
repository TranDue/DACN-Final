import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillConfigComponent } from './bill-config.component';

describe('BillConfigComponent', () => {
  let component: BillConfigComponent;
  let fixture: ComponentFixture<BillConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
