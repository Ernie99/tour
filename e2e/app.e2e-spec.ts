import { TourPage } from './app.po';

describe('tour App', function() {
  let page: TourPage;

  beforeEach(() => {
    page = new TourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
