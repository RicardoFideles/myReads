import { header,  searchButton, bookshelf } from '../pageObjects/app';
import { load } from '../pageObjects/index';

describe('app', () => {
  beforeEach(async () => {
    await load();
  });

  it('should show the right header', async () => {
    expect(await header().getText()).toBe('MyReads');
  });

  it('should show search button', async () => {
    expect(await searchButton().getText()).toBe('Add a book');
  });

  it('should first shelf be called ...', async () => {
    expect(await bookshelf().getText()).toBe('Currently Reading');
  });


});