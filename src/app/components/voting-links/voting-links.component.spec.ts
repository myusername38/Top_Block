import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingLinksComponent } from './voting-links.component';

describe('VotingLinksComponent', () => {
  let component: VotingLinksComponent;
  let fixture: ComponentFixture<VotingLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
