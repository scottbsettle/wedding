import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGallaryComponent } from './photo-gallary.component';

describe('PhotoGallaryComponent', () => {
  let component: PhotoGallaryComponent;
  let fixture: ComponentFixture<PhotoGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoGallaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
