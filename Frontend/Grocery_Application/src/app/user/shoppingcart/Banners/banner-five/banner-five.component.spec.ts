import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFiveComponent } from './banner-five.component';

describe('BannerFiveComponent', () => {
  let component: BannerFiveComponent;
  let fixture: ComponentFixture<BannerFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
