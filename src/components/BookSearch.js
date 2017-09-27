import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

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

    componentWillUnmount(){
        this.setState({
            query : '',
            results : []
        })
    }

    render() {
        const {query, results} = this.state
        const {onUpdateBook, shelves} = this.props
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
                    {results.map(book => (
                        <li key={book.id}>
                            <Book shelves={shelves} book={book} onUpdateBook={onUpdateBook}/>                       
                        </li>
                    ))}
                   
                </ol>
            </div>
        </div>
        );
    }
}

export default BookSearch;