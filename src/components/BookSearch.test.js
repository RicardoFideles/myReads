import React from "react"
import BookSearch from "./BookSearch"
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
    const currentBooks = [{"id": 1,"title":"The Linux Command Line","subtitle":"A Complete Introduction","authors":["William E. Shotts, Jr."],"shelf":"wantToRead"},{"id": 2,"title":"Learning Web Development with React and Bootstrap","authors":["Harmeet Singh","Mehul Bhatt"],"shelf":"currentlyReading"}]
    expect(shallow(<BookSearch shelves={shelves} currentBooks={currentBooks} onUpdateBook={onUpdateBook}/>)).toMatchSnapshot()
})


// const fetchMock = require('fetch-mock')
// fetchMock.post('*', { "books" : [{"id": 1,"title":"The Linux Command Line","subtitle":"A Complete Introduction","authors":["William E. Shotts, Jr."],"shelf":"wantToRead"},{"id": 2,"title":"Learning Web Development with React and Bootstrap","authors":["Harmeet Singh","Mehul Bhatt"],"shelf":"currentlyReading"}]})

it('Search for a book', async ()  => {

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
    const currentBooks = [{"id": 1,"title":"The Linux Command Line","subtitle":"A Complete Introduction","authors":["William E. Shotts, Jr."],"shelf":"wantToRead"}]

    const test = shallow(<BookSearch shelves={shelves} currentBooks={currentBooks} onUpdateBook={onUpdateBook}/>)

    expect(test.state().results.length).toBe(0);
    expect(test.state().query).toBe('');

    await test.find('input').simulate('change', { target: { value: "React" }})
    await Promise.resolve();

    expect(test.state().query).toBe('React');
    console.log(test.state())
    expect(test.state().results.length).toBe(2);


})

