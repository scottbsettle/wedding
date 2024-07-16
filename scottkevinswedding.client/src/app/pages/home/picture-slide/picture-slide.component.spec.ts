import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureSlideComponent } from './picture-slide.component';

describe('PictureSlideComponent', () => {
  let component: PictureSlideComponent;
  let fixture: ComponentFixture<PictureSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PictureSlideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PictureSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
