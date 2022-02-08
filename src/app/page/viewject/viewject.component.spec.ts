import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewjectComponent } from './viewject.component';

describe('ViewjectComponent', () => {
  let component: ViewjectComponent;
  let fixture: ComponentFixture<ViewjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
