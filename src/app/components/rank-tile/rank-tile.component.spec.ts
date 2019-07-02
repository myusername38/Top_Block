import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankTileComponent } from './rank-tile.component';

describe('RankTileComponent', () => {
  let component: RankTileComponent;
  let fixture: ComponentFixture<RankTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
