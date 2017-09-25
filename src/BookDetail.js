import React, { Component } from 'react'
import If from './If'

class BookDetail extends Component {

    constructor(props) {
        super(props)
        this.props.onLoad(this.props.bookID)
    }
    render() {
        console.log(this.props.book)
        const {book}  = this.props
        console.log('=----', book)
        const thumb = book !== null ? book.imageLinks.thumbnail : '' 
        return (
                <If test={book}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumb}")` }}></div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        
                        
                    </div>
                </If>
            )
    }
}

export default BookDetail;