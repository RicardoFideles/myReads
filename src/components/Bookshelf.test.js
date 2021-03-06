import React from "react"
import Bookshelf from "./Bookshelf"
import {shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-15'
import * as Enzyme from "enzyme"

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const id = 1
    const title = 'Currently Reading'
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
    const books = [{"id": 1,"title":"The Linux Command Line","subtitle":"A Complete Introduction","authors":["William E. Shotts, Jr."],"shelf":"wantToRead"},{"id": 2,"title":"Learning Web Development with React and Bootstrap","authors":["Harmeet Singh","Mehul Bhatt"],"shelf":"currentlyReading"}]
    expect(shallow(<Bookshelf shelves={shelves} key={id} books={books} title={title} onUpdateBook={onUpdateBook}/>)).toMatchSnapshot()
})

