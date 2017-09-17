import { GitFrontendChallengePage } from './app.po';

describe('git-frontend-challenge App', function() {
  let page: GitFrontendChallengePage;

  beforeEach(() => {
    page = new GitFrontendChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
