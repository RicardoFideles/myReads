
import { root } from './index';

const headerSelector = { css: '.list-books .list-books-title' };
const searchButtonSelector = { css: '.open-search a' };
const bookshelfSelector = { css : '.bookshelf h2'}

export const header = () => root().findElement(headerSelector);

export const searchButton = () => root().findElement(searchButtonSelector);

export const bookshelf = () => root().findElement(bookshelfSelector);

