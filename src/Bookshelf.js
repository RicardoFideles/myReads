import React, { Component } from 'react'

class Bookself extends Component {

    render() {
        const {title, onUpdateBook} = this.props
        console.log(onUpdateBook);
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map(book => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                                    <div className="book-shelf-changer">
                                        <select onChange={ (event) => onUpdateBook(event.target.value, book) } name="shelf" value={book.shelf}> 
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead" >Want to Read</option>
                                            <option value="read" >Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                {book.authors.map(author => (
                                    <div className="book-authors">{author}</div>
                                ))}
                            </div>                           
                        </li>
                    ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookself;