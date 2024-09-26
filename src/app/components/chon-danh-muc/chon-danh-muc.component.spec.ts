import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChonDanhMucComponent } from './chon-danh-muc.component';

describe('ChonDanhMucComponent', () => {
  let component: ChonDanhMucComponent;
  let fixture: ComponentFixture<ChonDanhMucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChonDanhMucComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChonDanhMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
