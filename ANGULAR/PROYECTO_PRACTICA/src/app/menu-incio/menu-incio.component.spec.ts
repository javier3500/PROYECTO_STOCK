import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MENUINCIOComponent } from './menu-incio.component';

describe('MENUINCIOComponent', () => {
  let component: MENUINCIOComponent;
  let fixture: ComponentFixture<MENUINCIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MENUINCIOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MENUINCIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
