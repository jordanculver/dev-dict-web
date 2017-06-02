import { DevDictWebPage } from './app.po';

describe('dev-dict-web App', () => {
  let page: DevDictWebPage;

  beforeEach(() => {
    page = new DevDictWebPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
