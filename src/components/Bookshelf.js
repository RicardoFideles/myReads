import React from 'react'
import Book from './Book'

const Bookself = props => {
    const {title, onUpdateBook, shelves} = props
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {props.books.map(book => (
                    <li key={book.id}>
                        <Book shelves={shelves} book={book} onUpdateBook={onUpdateBook}/>
                    </li>
                ))}
                </ol>
            </div>
        </div>
    )
}

export default Bookself;