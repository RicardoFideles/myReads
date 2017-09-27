import React, { Component } from 'react'
import If from '../utils/If'
import { Link } from 'react-router-dom' 

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
                        <div className="book-shelf-changer">
                            <select onChange={(event) => onUpdateBook(event.target.value, book)} value={book.shelf !== undefined ? book.shelf : '' }> 
                                <option value="" disabled>Move to...</option>
                                {
                                    shelves.map(shelf => (
                                        <option key={shelf.id} value={shelf.id}>{shelf.title}</option>
                                    ))
                                }
                                <If test={book.shelf !== undefined}>
                                    <option value="none">None</option>
                                </If>
                            </select>
                        </div>
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