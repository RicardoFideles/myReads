import React from 'react'
import { Route, Link } from 'react-router-dom' 

import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import BookSearch from './BookSearch'
import './App.css'


class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books : [],
      showSearchPage: false,
      results : [],
      shelves : [
        {
          id : 'currentlyReading',
          title : 'Currently Reading'
        },
        {
          id : 'wantToRead',
          title : 'Want to Read'
        },
        {
          id : 'read',
          title : 'Read'
        }
      ]
    }
  }
  
  componentDidMount () {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  upateBookShelf = (shelf, book) => {
    book.shelf = shelf
    this.setState((state) => ({
      books : state.books.filter((b) => b.id !== book.id).concat([book])
    }))
    BooksAPI.update(book, shelf);
  } 

  searchBooks = (query) => {

    if (query === '') {
      this.setState({results : []})
      return
    }
    
    console.log('queryyy', query);
    BooksAPI.search(query, 20)
      .then((books) => {
        if (books === undefined) {
          this.setState({results : []})
          return
        }
        if (books.error) {
          this.setState({results : []})
          return
        }
        this.setState({results : books})
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                  this.state.shelves.map(shelf => (
                    <Bookshelf shelves={this.state.shelves} key={shelf.id} books={this.state.books.filter((book) => book.shelf === shelf.id)} title={shelf.title} onUpdateBook={this.upateBookShelf}/>
                  ))
                }
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}/>
        <Route path="/search" render={({history}) => (
          <BookSearch shelves={this.state.shelves} results={this.state.results} onSearch={this.searchBooks} onUpdateBook={(shelf, book) => {
            this.upateBookShelf(shelf, book);
            history.push('/');
            } }/>
        )}/>

      </div>
    )
  }
}

export default BooksApp
