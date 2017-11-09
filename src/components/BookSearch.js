import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'
import { Debounce } from 'react-throttle';


class BookSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query : '',
            results : []
        }
    }

    searchBooks = (query) => {

        //console.log('component');
        //console.log('qieruy====',query)

        if (query === '') {
            this.setState({results : []})
            return
        }

        BooksAPI.search(query, 20)
            .then((books) => {

            // console.log('retorno')
            // console.log(books)

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
        this.setState({query})
        this.searchBooks(query)
    }

    // componentDidMount() {
    //     this.searchBooks = debounce(300, false, this.searchBooks)
    // }

    render() {
        const {query, results} = this.state
        const {onUpdateBook, shelves, currentBooks} = this.props

        results.map((b) => {
            let bookInBooks = currentBooks.find(x => x.id === b.id)
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
                        <Debounce time="400" handler="onChange">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                onChange={(event) => this.updateQuery(event.target.value)}
                                />
                        </Debounce>
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