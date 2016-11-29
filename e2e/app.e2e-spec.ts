import { AngjsPage } from './app.po';

describe('angjs App', function() {
  let page: AngjsPage;

  beforeEach(() => {
    page = new AngjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
