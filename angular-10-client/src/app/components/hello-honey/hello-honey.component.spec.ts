import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloHoney } from './hello-honey.component';

describe('AddTutorialComponent', () => {
  let component: HelloHoney;
  let fixture: ComponentFixture<HelloHoney>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloHoney ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloHoney);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
