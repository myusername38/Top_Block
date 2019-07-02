import { TestBed } from '@angular/core/testing';

import { PlayerLeadersService } from './player-leaders.service';

describe('PlayerLeadersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerLeadersService = TestBed.get(PlayerLeadersService);
    expect(service).toBeTruthy();
  });
});
