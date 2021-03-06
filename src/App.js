import React from 'react'
import { Route, Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import Bookshelf from './components/Bookshelf'
import BookSearch from './components/BookSearch'
import BookDetail from './components/BookDetail'
import Header from './utils/header'
import './App.css'

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books : [],
      showSearchPage: false
    }
  }

  componentDidMount () {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  upateBookShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState((state) => ({
        books : state.books.filter((b) => b.id !== book.id).concat([book])
      }))
    });
  }

  render() {
    const shelves = [{
      id : 'currentlyReading',
      title : 'Currently Reading'
    },{
      id : 'wantToRead',
      title : 'Want to Read'
    },{
      id : 'read',
      title : 'Read'
    }]
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <Header title="MyReads" />
            <div className="list-books-content">
              <div>
                {
                  shelves.map(shelf => (
                    <Bookshelf shelves={shelves} key={shelf.id} books={this.state.books.filter((book) => book.shelf === shelf.id)} title={shelf.title} onUpdateBook={this.upateBookShelf}/>
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
          <BookSearch shelves={shelves} currentBooks={this.state.books} onUpdateBook={(shelf, book) => {
            this.upateBookShelf(shelf, book);
            history.push('/');
            } }/>
        )}/>
        <Route path="/book/:id" render={ ({ match, history }) => (
            <BookDetail bookID={match.params.id} shelves={shelves} onUpdateBook={(shelf, book) => {
              this.upateBookShelf(shelf, book);
                history.push('/');
              }}
            />
        )}
        />

      </div>
    )
  }
}

export default BooksApp
