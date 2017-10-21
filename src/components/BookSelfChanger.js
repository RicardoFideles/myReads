import React from 'react'

const BookSelfChanger = props => (
    <div className="book-shelf-changer">
        <select onChange={(event) => props.onUpdateBook(event.target.value, props.book)} value={props.book.shelf !== undefined ? props.book.shelf : '' }>
            <option value="" disabled>Move to...</option>
            {
                props.shelves.map(shelf => (
                    <option key={shelf.id} value={shelf.id}>{shelf.title}</option>
                ))
            }
        </select>
    </div>
)

export default BookSelfChanger