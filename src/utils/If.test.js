import React from "react"
import If from "./If"
import { Link } from 'react-router-dom'
import {shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-15'
import * as Enzyme from "enzyme"

Enzyme.configure({ adapter: new Adapter() })

it('should show children', () => {
    const value = true
    const test = shallow(<If test={value}><Link className="back-home" to='/'>Close</Link></If>)
    expect(test.find('Link').length).toBe(1)
})

it('should not show children', () => {
    const value = false
    const test = shallow(<If test={value}> <div>should appear</div></If>)
    expect(test.find('div').length).toBe(0)
})