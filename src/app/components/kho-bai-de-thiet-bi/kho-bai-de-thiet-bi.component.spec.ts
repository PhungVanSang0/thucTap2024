import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoBaiDeThietBiComponent } from './kho-bai-de-thiet-bi.component';

describe('KhoBaiDeThietBiComponent', () => {
  let component: KhoBaiDeThietBiComponent;
  let fixture: ComponentFixture<KhoBaiDeThietBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhoBaiDeThietBiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhoBaiDeThietBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
