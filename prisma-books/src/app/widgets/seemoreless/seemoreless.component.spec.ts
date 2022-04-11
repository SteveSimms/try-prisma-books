import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeemorelessComponent } from './seemoreless.component';

describe('SeemorelessComponent', () => {
  let component: SeemorelessComponent;
  let fixture: ComponentFixture<SeemorelessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeemorelessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeemorelessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
