import { AdresboekPage } from './app.po';

describe('adresboek App', () => {
  let page: AdresboekPage;

  beforeEach(() => {
    page = new AdresboekPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
