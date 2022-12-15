import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GananciasListoComponent } from './ganancias-listo.component';

describe('GananciasListoComponent', () => {
  let component: GananciasListoComponent;
  let fixture: ComponentFixture<GananciasListoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GananciasListoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GananciasListoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
