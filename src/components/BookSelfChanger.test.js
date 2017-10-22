import React from "react"
import BookSelfChanger from "./BookSelfChanger"
import {shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-15'
import * as Enzyme from "enzyme"

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const onUpdateBook = jest.fn()
    const shelves = [{
        id : 'currentlyReading',
        title : 'Currently Reading'
      },{
        id : 'wantToRead',
        title : 'Want to Read'
      },{
        id : 'read',
        title : 'Read'
      }]
    const book = { shelf : "currentlyReading"}
    expect(shallow(<BookSelfChanger onUpdateBook={onUpdateBook} book={book} shelves={shelves}/>)).toMatchSnapshot()
})

it('when a book shelf is updated ', () => {
    const onUpdateBook = jest.fn()
    const shelves = [{
        id : 'currentlyReading',
        title : 'Currently Reading'
      },{
        id : 'wantToRead',
        title : 'Want to Read'
      },{
        id : 'read',
        title : 'Read'
      }]
    const book = { shelf : "currentlyReading"}
    const test = mount(
        <BookSelfChanger
            onUpdateBook={onUpdateBook}
            book={book}
            shelves={shelves}
        />
    )
    test.find('select').simulate('change')
    expect(onUpdateBook).toHaveBeenCalledTimes(1)
})