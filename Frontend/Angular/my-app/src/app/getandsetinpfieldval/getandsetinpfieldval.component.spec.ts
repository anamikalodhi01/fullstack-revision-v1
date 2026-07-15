import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetandsetinpfieldvalComponent } from './getandsetinpfieldval.component';

describe('GetandsetinpfieldvalComponent', () => {
  let component: GetandsetinpfieldvalComponent;
  let fixture: ComponentFixture<GetandsetinpfieldvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetandsetinpfieldvalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetandsetinpfieldvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
