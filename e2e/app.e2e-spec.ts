import { AlmuerSOSFrontPage } from './app.po';

describe('almuersos-front App', function() {
  let page: AlmuerSOSFrontPage;

  beforeEach(() => {
    page = new AlmuerSOSFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
