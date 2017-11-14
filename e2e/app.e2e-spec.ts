import { QuoteranksPage } from './app.po';

describe('quoteranks App', () => {
  let page: QuoteranksPage;

  beforeEach(() => {
    page = new QuoteranksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
