import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleoptionComponent } from './styleoption.component';

describe('StyleoptionComponent', () => {
  let component: StyleoptionComponent;
  let fixture: ComponentFixture<StyleoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleoptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
