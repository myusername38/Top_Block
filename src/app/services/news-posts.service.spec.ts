import { TestBed } from '@angular/core/testing';

import { NewsPostsService } from './news-posts.service';

describe('NewsPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsPostsService = TestBed.get(NewsPostsService);
    expect(service).toBeTruthy();
  });
});
