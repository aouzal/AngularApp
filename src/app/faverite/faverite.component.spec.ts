import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaveriteComponent } from './faverite.component';

describe('FaveriteComponent', () => {
  let component: FaveriteComponent;
  let fixture: ComponentFixture<FaveriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaveriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaveriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
