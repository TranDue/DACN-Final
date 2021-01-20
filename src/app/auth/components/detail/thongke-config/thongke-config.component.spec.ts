import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongkeConfigComponent } from './thongke-config.component';

describe('ThongkeConfigComponent', () => {
  let component: ThongkeConfigComponent;
  let fixture: ComponentFixture<ThongkeConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongkeConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongkeConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
