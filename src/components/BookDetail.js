import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Header from '../utils/header'
import BookSelfChanger from './BookSelfChanger'


class BookDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            book : null,
            loading  : true
        }
        this.loadBook(this.props.bookID)
    }

    loadBook = (id) => {
        BooksAPI.get(id).then((book) => {
            this.setState ({
                book :  book,
                loading : false
            })
        })
    }

    render() {
        const {loading, book}  = this.state
        if(loading){
            return null
        }
        const authors = Array.isArray(book.authors) ? book.authors.join(', ') : ''
        const { onUpdateBook, shelves }  = this.props
        return (
            <div>
                <div className="list-books">

                    <Header title={book.title} detail="true"/>

                    <div className="container">
                        <div className="col-md-3 col-xs-12">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                                <BookSelfChanger onUpdateBook={onUpdateBook} book={book} shelves={shelves}/>
                            </div>
                        </div>

                        <div className="col-md-9 col-xs-12">
                            <div className="book-title">
                                <h3>{book.title}</h3>
                                <div>
                                    <h4>Description</h4>
                                    {book.description}
                                </div>
                                <p> Authors :  {authors}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BookDetail;
