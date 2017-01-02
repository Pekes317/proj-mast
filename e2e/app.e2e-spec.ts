import { ProjMastPage } from './app.po';

describe('proj-mast App', function() {
  let page: ProjMastPage;

  beforeEach(() => {
    page = new ProjMastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
