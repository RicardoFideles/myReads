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
                    <img className="book-cover" src={book.imageLinks.thumbnail}/>
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