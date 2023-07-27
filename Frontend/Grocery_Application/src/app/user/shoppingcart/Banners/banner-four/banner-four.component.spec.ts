import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFourComponent } from './banner-four.component';

describe('BannerFourComponent', () => {
  let component: BannerFourComponent;
  let fixture: ComponentFixture<BannerFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
