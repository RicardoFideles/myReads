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
    {"id": 1,'title':'Best Android Apps','subtitle':'The Guide for Discriminating Downloaders','authors':['Mike Hendrickson','Brian Sawyer'],'publisher':'"O\'Reilly Media, Inc."','publishedDate':'2010-04-27','description':'Contains descriptions of over two hundred recommended applications and games for android/mobile devices, including apps for business, communication, lifestyle, entertainment, utility/tool, and reference.','industryIdentifiers':[{'type':'ISBN_13','identifier':'9781449382551'},{'type':'ISBN_10','identifier':'144938255X'}],'readingModes':{'text':false,'image':false},'pageCount':240,'printType':'BOOK','categories':['Computers'],'averageRating':4,'ratingsCount':3,'maturityRating':'NOT_MATURE','allowAnonLogging':false,'contentVersion':'preview-1.0.0','imageLinks':{'smallThumbnail':'http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api','thumbnail':'http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'},'language':'en','previewLink':'http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&cd=1&source=gbs_api','infoLink':'http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&source=gbs_api','canonicalVolumeLink':'https://books.google.com/books/about/Best_Android_Apps.html?hl=&id=bUybAgAAQBAJ','id':'bUybAgAAQBAJ'},
    {'title':'Best Android Apps','subtitle':'The Guide for Discriminating Downloaders','authors':['Mike Hendrickson','Brian Sawyer'],'publisher':'"O\'Reilly Media, Inc."','publishedDate':'2010-04-27','description':'Contains descriptions of over two hundred recommended applications and games for android/mobile devices, including apps for business, communication, lifestyle, entertainment, utility/tool, and reference.','industryIdentifiers':[{'type':'ISBN_13','identifier':'9781449382551'},{'type':'ISBN_10','identifier':'144938255X'}],'readingModes':{'text':false,'image':false},'pageCount':240,'printType':'BOOK','categories':['Computers'],'averageRating':4,'ratingsCount':3,'maturityRating':'NOT_MATURE','allowAnonLogging':false,'contentVersion':'preview-1.0.0','imageLinks':{'smallThumbnail':'http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api','thumbnail':'http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'},'language':'en','previewLink':'http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&cd=1&source=gbs_api','infoLink':'http://books.google.com/books?id=bUybAgAAQBAJ&dq=android&hl=&source=gbs_api','canonicalVolumeLink':'https://books.google.com/books/about/Best_Android_Apps.html?hl=&id=bUybAgAAQBAJ','id':'bUybAgAAQBAJ'}
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
