import { CloudeditPage } from './app.po';

describe('cloudedit App', () => {
  let page: CloudeditPage;

  beforeEach(() => {
    page = new CloudeditPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
