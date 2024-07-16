import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongPickComponent } from './song-pick.component';

describe('SongPickComponent', () => {
  let component: SongPickComponent;
  let fixture: ComponentFixture<SongPickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SongPickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SongPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
