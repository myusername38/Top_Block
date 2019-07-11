import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotinglinksComponent } from './votinglinks.component';

describe('VotinglinksComponent', () => {
  let component: VotinglinksComponent;
  let fixture: ComponentFixture<VotinglinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotinglinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotinglinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
