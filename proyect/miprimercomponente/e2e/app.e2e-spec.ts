import { MiprimercomponentePage } from './app.po';

describe('miprimercomponente App', function() {
  let page: MiprimercomponentePage;

  beforeEach(() => {
    page = new MiprimercomponentePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
