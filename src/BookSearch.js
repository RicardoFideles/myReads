import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class BookSearch extends Component {

    state = {
        query : '',
    }

    updateQuery = (query) => {
        this.setState({query : query.trim()})
        this.props.onSearch(query)
    }


    render() {
        const {query} = this.state
        const {results, onUpdateBook, shelves} = this.props
        console.log(results)
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