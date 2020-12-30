import React from 'react';
import { Newsitems } from './Newsitems';


export class News extends React.Component {

    render() {
        return this.props.articles.map((article) => {
            return <Newsitems article={article}></Newsitems>
        })
    }
}