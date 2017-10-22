import React from "react"
import Header from "./Header"
import {shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-15'
import * as Enzyme from "enzyme"

Enzyme.configure({ adapter: new Adapter() })


it('renders without crashing', () => {
    const title = "MyReads"
    expect(shallow(<Header title={title} />)).toMatchSnapshot()
})

it('Header with detail', () => {
    const title = "MyReads"
    const detail = true
    expect(shallow(<Header title={title} detail={detail} />)).toMatchSnapshot()
})