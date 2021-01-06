import React from 'react';
import { Newsitems } from './Newsitems';


export class News extends React.Component {
 //javascript that calls newsitem and uses map to display them individually 
    //this is called to the read component which display it in the browser
    //reload data is to allow for the page to automatically update when an article is delete, etc
    render() {
       return this.props.article.map((article)=>{
           return <Newsitems article={article} ReloadData={this.props.ReloadData}></Newsitems>
        })
    }
}