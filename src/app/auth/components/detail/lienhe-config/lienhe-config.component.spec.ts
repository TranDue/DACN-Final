import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienheConfigComponent } from './lienhe-config.component';

describe('LienheConfigComponent', () => {
  let component: LienheConfigComponent;
  let fixture: ComponentFixture<LienheConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LienheConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LienheConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
