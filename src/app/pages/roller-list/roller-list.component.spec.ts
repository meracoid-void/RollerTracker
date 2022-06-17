import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollerListComponent } from './roller-list.component';

describe('RollerListComponent', () => {
  let component: RollerListComponent;
  let fixture: ComponentFixture<RollerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
