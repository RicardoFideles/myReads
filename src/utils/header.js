import React from 'react'
import { Link } from 'react-router-dom'
import If from './If'

export default props => (
    <div className="list-books-title">
        <If test={props.detail}>
            <Link className="back-home" to='/'>Close</Link>
        </If>
        <h1>{props.title}</h1>
    </div>
)