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


jest.useFakeTimers()
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
  let searchResult = [
    {"id": 1,'title':'Best Android Apps','subtitle':'The Guide for Discriminating Downloaders','authors':['Mike Hendrickson','Brian Sawyer'],'publisher':'"O\'Reilly Media, Inc."','imageLinks':{'smallThumbnail':'http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api','thumbnail':'http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'}},
    {'title':'Best Android Apps','subtitle':'The Guide for Discriminating Downloaders','authors':['Mike Hendrickson','Brian Sawyer'],'publisher':'"O\'Reilly Media, Inc."','publishedDate':'2010-04-27','description':'Contains descriptions of over two hundred recommended applications and games for android/mobile devices, including apps for business, communication, lifestyle, entertainment, utility/tool, and reference.','imageLinks':{'smallThumbnail':'http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api','thumbnail':'http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'},'id':'bUybAgAAQBAJ'}
  ]

  global.fetch = await jest.fn(() => new Promise(resolve => resolve({
    json: () => { 
      return { books: searchResult }
    }
  })))

  const test = shallow(<BookSearch shelves={shelves} currentBooks={currentBooks} onUpdateBook={onUpdateBook}/>)
  
  expect(test.state().results.length).toBe(0);
  expect(test.state().query).toBe('');

  await test.find('input').simulate('change', { target: { value: "React" }})
  jest.runOnlyPendingTimers()
  await new Promise(resolve => {
    setImmediate(() => {
      expect(test.state().results.length).toBe(2); 
      expect(test.state().query).toBe('React');  
      resolve()
    })
  });

  
})

jest.useFakeTimers()
it('When query is empty', async ()  => {
  
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
  let searchResult = []

  global.fetch = await jest.fn(() => new Promise(resolve => resolve({
    json: () => { 
      return { books: searchResult }
    }
  })))

  const test = shallow(<BookSearch shelves={shelves} currentBooks={currentBooks} onUpdateBook={onUpdateBook}/>)
  
  expect(test.state().results.length).toBe(0);
  expect(test.state().query).toBe('');

  await test.find('input').simulate('change', { target: { value: "" }})
  jest.runOnlyPendingTimers()
  await new Promise(resolve => {
    setImmediate(() => {
      expect(test.state().results.length).toBe(0); 
      expect(test.state().query).toBe('');  
      resolve()
    })
  });
  
  
})


jest.useFakeTimers()
it('When the service return a error', async ()  => {

  console.log('service is down')
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

  global.fetch = await jest.fn(() => new Promise(resolve => resolve({
    json: () => { 
      return { books : {error : true} }
    }
  })))

  const test = shallow(<BookSearch shelves={shelves} currentBooks={currentBooks} onUpdateBook={onUpdateBook}/>)
  
  expect(test.state().results.length).toBe(0);
  expect(test.state().query).toBe('');

  await test.find('input').simulate('change', { target: { value: 'React' }})
  jest.runOnlyPendingTimers()
  await new Promise(resolve => {
    setImmediate(() => {
      expect(test.state().results.length).toBe(0); 
      expect(test.state().query).toBe('React');  
      resolve()
    })
  });
  
  
})

jest.useFakeTimers()
it('When the service is down', async ()  => {

  console.log('service is down')
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

  global.fetch = await jest.fn(() => new Promise(resolve => resolve({
    json: () => { 
      return { books : undefined }
    }
  })))

  const test = shallow(<BookSearch shelves={shelves} currentBooks={currentBooks} onUpdateBook={onUpdateBook}/>)
  
  expect(test.state().results.length).toBe(0);
  expect(test.state().query).toBe('');

  await test.find('input').simulate('change', { target: { value: 'React' }})
  jest.runOnlyPendingTimers()
  await new Promise(resolve => {
    setImmediate(() => {
      expect(test.state().results.length).toBe(0); 
      expect(test.state().query).toBe('React');  
      resolve()
    })
  });
  
  
})