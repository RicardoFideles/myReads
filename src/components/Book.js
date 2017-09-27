import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import BookSelfChanger from './BookSelfChanger'


class Book extends Component {
    render() {
        const {book, onUpdateBook, shelves}  = this.props
        const authors = book.authors !== undefined ? book.authors : []
        return (
                <div className="book">
                    <div className="book-top">
                        <Link to={`/book/${book.id}`}>
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                        </Link>
                        <BookSelfChanger onUpdateBook={onUpdateBook} book={book} shelves={shelves}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {authors.map(author => (
                        <div key={author} className="book-authors">{author}</div>
                    ))}
                </div>
            )
    }
}

export default Book;