import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhanhoiConfigComponent } from './phanhoi-config.component';

describe('PhanhoiConfigComponent', () => {
  let component: PhanhoiConfigComponent;
  let fixture: ComponentFixture<PhanhoiConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhanhoiConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhanhoiConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
