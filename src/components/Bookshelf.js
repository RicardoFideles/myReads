import React, { Component } from 'react'
import Book from './Book'

class Bookself extends Component {
    render() {
        const {title, onUpdateBook, shelves} = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map(book => (
                        <li key={book.id}>
                            <Book shelves={shelves} book={book} onUpdateBook={onUpdateBook}/>                       
                        </li>
                    ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookself;