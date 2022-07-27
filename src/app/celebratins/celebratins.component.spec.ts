import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebratinsComponent } from './celebratins.component';

describe('CelebratinsComponent', () => {
  let component: CelebratinsComponent;
  let fixture: ComponentFixture<CelebratinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebratinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebratinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
