import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaBanThietBiComponent } from './gia-ban-thiet-bi.component';

describe('GiaBanThietBiComponent', () => {
  let component: GiaBanThietBiComponent;
  let fixture: ComponentFixture<GiaBanThietBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiaBanThietBiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiaBanThietBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
