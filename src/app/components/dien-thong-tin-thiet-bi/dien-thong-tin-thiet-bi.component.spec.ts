import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DienThongTinThietBiComponent } from './dien-thong-tin-thiet-bi.component';

describe('DienThongTinThietBiComponent', () => {
  let component: DienThongTinThietBiComponent;
  let fixture: ComponentFixture<DienThongTinThietBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DienThongTinThietBiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DienThongTinThietBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
