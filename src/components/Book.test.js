import React from "react"
import Book from "./Book"
import {shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-15'
import * as Enzyme from "enzyme"

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const onUpdateBook = jest.fn()
    const shelves = []
    const currentBooks = []
    const book = { id : 1, imageLinks : { thumbnail : "test"}, title : "Jest In Action", authors : [ "Ricardo", "Nathaly"] }
    expect(shallow(<Book shelves={shelves} currentBooks={currentBooks} book={book} onUpdateBook={onUpdateBook}/>)).toMatchSnapshot()
})
