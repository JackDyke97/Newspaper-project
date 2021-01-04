import React from 'react';
import { News } from './News';
import axios from 'axios';


export class Read extends React.Component {

    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        articles: []
        
    }

    componentDidMount() {
        axios.get('https://localhost:4000/api/articles')
            .then((response) => {
                this.setState({ articles: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    //function to automatically refresh our page
    ReloadData(){
        axios
          .get("http://localhost:4000/api/articles")
          .then((response) => {
            this.setState({ articles: response.data });
          })
          .catch((error) => {
            console.log(error);
          });
   }

    render() {
        return (
            <div>
                <h1>The Daily Bugle</h1>
                <News articles={this.state.articles} ReloadData={this.ReloadData}></News>
            </div>
        );
    }
}