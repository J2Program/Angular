import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsplanComponent } from './detailsplan.component';

describe('DetailsplanComponent', () => {
  let component: DetailsplanComponent;
  let fixture: ComponentFixture<DetailsplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
