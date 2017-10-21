import React from 'react'
import { Link } from 'react-router-dom'
import BookSelfChanger from './BookSelfChanger'

const Book = props => {
    const {book, onUpdateBook, shelves, currentBooks}  = props
    const authors = book.authors !== undefined ? book.authors : []
    return (
        <div className="book">
            <div className="book-top">
                <Link to={`/book/${book.id}`}>
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                </Link>
                <BookSelfChanger currentBooks={currentBooks} onUpdateBook={onUpdateBook} book={book} shelves={shelves}/>
            </div>
            <div className="book-title">{book.title}</div>
            {authors.map(author => (
                <div key={author} className="book-authors">{author}</div>
            ))}
        </div>
    )
}

export default Book