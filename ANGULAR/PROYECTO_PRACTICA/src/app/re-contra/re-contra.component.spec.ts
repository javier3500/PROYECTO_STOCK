import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReContraComponent } from './re-contra.component';

describe('ReContraComponent', () => {
  let component: ReContraComponent;
  let fixture: ComponentFixture<ReContraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReContraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
