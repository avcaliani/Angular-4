import { SkeletonPage } from './app.po';

describe('skeleton App', () => {
  let page: SkeletonPage;

  beforeEach(() => {
    page = new SkeletonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
