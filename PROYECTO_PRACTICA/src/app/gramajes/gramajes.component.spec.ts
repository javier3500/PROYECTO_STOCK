import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GramajesComponent } from './gramajes.component';

describe('GramajesComponent', () => {
  let component: GramajesComponent;
  let fixture: ComponentFixture<GramajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GramajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GramajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
