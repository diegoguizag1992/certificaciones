import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearproveedoresComponent } from './crearproveedores.component';

describe('CrearproveedoresComponent', () => {
  let component: CrearproveedoresComponent;
  let fixture: ComponentFixture<CrearproveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearproveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
