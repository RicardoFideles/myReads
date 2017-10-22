import React from "react"
import BookDetail from "./BookDetail"
import {shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-15'
import * as Enzyme from "enzyme"

Enzyme.configure({ adapter: new Adapter() })

const fetchMock = require('fetch-mock')
fetchMock.get('*', {"book":{"title":"Learning React","subtitle":"Functional Web Development with React and Redux","authors":["Alex Banks","Eve Porcello"],"publisher":"\"O'Reilly Media, Inc.\"","publishedDate":"2017-04-27","description":"If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this small JavaScript library that can deftly display data changes on large-scale, data-driven websites without page reloads. Along the way, you’ll learn how to work with functional programming and the latest ECMAScript features. Developed by Facebook, and used by companies including Netflix, Walmart, and The New York Times for large parts of their web interfaces, React is quickly growing in use. By learning how to build React components with this hands-on guide, you’ll fully understand how useful React can be in your organization. Learn key functional programming concepts with JavaScript Peek under the hood to understand how React runs in the browser Create application presentation layers by mounting and composing React components Use component trees to manage data and reduce the time you spend debugging applications Explore React’s component lifecycle and use it to load data and improve UI performance Use a routing solution for browser history, bookmarks, and other features of single-page applications Learn how to structure React applications with servers in mind","industryIdentifiers":[{"type":"ISBN_13","identifier":"9781491954591"},{"type":"ISBN_10","identifier":"1491954590"}],"readingModes":{"text":false,"image":true},"pageCount":350,"printType":"BOOK","categories":["Computers"],"maturityRating":"NOT_MATURE","allowAnonLogging":false,"contentVersion":"1.2.1.0.preview.1","panelizationSummary":{"containsEpubBubbles":false,"containsImageBubbles":false},"imageLinks":{"smallThumbnail":"http://books.google.com/books/content?id=ycTADgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api","thumbnail":"http://books.google.com/books/content?id=ycTADgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},"language":"en","previewLink":"http://books.google.com/books?id=ycTADgAAQBAJ&printsec=frontcover&dq=react&hl=&cd=3&source=gbs_api","infoLink":"http://books.google.com/books?id=ycTADgAAQBAJ&dq=react&hl=&source=gbs_api","canonicalVolumeLink":"https://books.google.com/books/about/Learning_React.html?hl=&id=ycTADgAAQBAJ","id":"ycTADgAAQBAJ","shelf":"none"}});

it('renders without crashing', () => {
    const onUpdateBook = jest.fn()
    const shelves = []
    expect(shallow(<BookDetail bookID={1} shelves={shelves} onUpdateBook={onUpdateBook}/>)).toMatchSnapshot()
})