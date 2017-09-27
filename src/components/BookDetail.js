import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Title from '../utils/header'
import If from '../utils/If'


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
            console.log(book)
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
                       
                        <Title title={book.title} detail="true"/>

                        <div className="container">
                            <div className="col-xs-3">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
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
                            </div>

                            <div className="col-xs-9">
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
