import { NiceFishDemoPage } from './app.po';

describe('nice-fish-demo App', () => {
  let page: NiceFishDemoPage;

  beforeEach(() => {
    page = new NiceFishDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
