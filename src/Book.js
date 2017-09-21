import React, { Component } from 'react'

class Book extends Component {
    render() {
        const {book, onUpdateBook}  = this.props
        return (
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={(event) => onUpdateBook(event.target.value, book)}> 
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors.map(author => (
                        <div key={author} className="book-authors">{author}</div>
                    ))}
                    
                </div>
                )
    }
}

export default Book;