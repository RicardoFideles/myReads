import React from "react"
import App from "./App"
import {shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-15'
import * as Enzyme from "enzyme"

Enzyme.configure({ adapter: new Adapter() })

const fetchMock = require('fetch-mock')
fetchMock.get('*', { "books" : [{"id": 1,"title":"The Linux Command Line","subtitle":"A Complete Introduction","authors":["William E. Shotts, Jr."],"shelf":"wantToRead"},{"id": 2,"title":"Learning Web Development with React and Bootstrap","authors":["Harmeet Singh","Mehul Bhatt"],"shelf":"currentlyReading"}]})

it('renders without crashing', () => {
    expect(shallow(<App />)).toMatchSnapshot()
})

