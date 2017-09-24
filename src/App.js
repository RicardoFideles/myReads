import React from 'react'
import { Route, Link } from 'react-router-dom' 

import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import BookSearch from './BookSearch'
import './App.css'


class BooksApp extends React.Component {
  state = {
    books : [],
    showSearchPage: false,
    results : []
  }

  componentDidMount () {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }


  upateBookShelf = (shelf, book) => {
    console.log(shelf);
    console.log(book);
    if (shelf !== 'none') {
      book.shelf = shelf
      this.setState((state) => ({
        books : state.books.filter((b) => b.id !== book.id).concat([book])
      }))
      BooksAPI.update(book, shelf);
    }
  } 

  searchBooks = (query) => {
    BooksAPI.search(query, 20)
      .then((books) => {
        if (books === undefined) {
          this.setState({results : []})
          return
        }
        this.setState({results : books})
      })
  }

  render() {

    const readingBooks = this.state.books.filter((book) => book.shelf === 'currentlyReading')
    const wantToReadBooks = this.state.books.filter((book) => book.shelf === 'wantToRead')
    const readBooks = this.state.books.filter((book) => book.shelf === 'read')

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <Bookshelf books={readingBooks} title="Currently Reading" onUpdateBook={this.upateBookShelf}/>
                  <Bookshelf books={wantToReadBooks} title="Want to Read" onUpdateBook={this.upateBookShelf}/>
                  <Bookshelf books={readBooks} title="Read" onUpdateBook={this.upateBookShelf}/>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}/>
        <Route path="/search" render={({history}) => (
          <BookSearch results={this.state.results} onSearch={this.searchBooks} onUpdateBook={(shelf, book) => {
            this.upateBookShelf(shelf, book);
            history.push('/');
            } }/>
        )}/>

      </div>
    )
  }
}

export default BooksApp
