import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'
import debounce from 'throttle-debounce/debounce'

class BookSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query : '',
            results : []
        }
    }

    searchBooks = (query) => {

        if (query === '') {
            this.setState({results : []})
            return
        }

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

    updateQuery = (query) => {
        this.setState({query : query.trim()})
        this.searchBooks(query)
    }

    componentDidMount() {
        this.searchBooks = debounce(300, false, this.searchBooks)
    }

    render() {
        const {query, results} = this.state
        const {onUpdateBook, shelves, currentBooks} = this.props

        results.map((b) => {
            let bookInBooks = currentBooks.filter((x) => x.id === b.id)[0]
            if (bookInBooks !== undefined) {
                if (b.id === bookInBooks.id) {
                    b.shelf = bookInBooks.shelf
                }
            }
            return b;
        })

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                            />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {results.map(book =>
                            (
                                <li key={book.id}>
                                    <Book shelves={shelves} currentBooks={currentBooks} book={book} onUpdateBook={onUpdateBook}/>
                                </li>
                            )
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch;