import React from 'react';
import { News } from './News';
import axios from 'axios';



export class Read extends React.Component {
//the constructor and super, with reload data that automatially reloads when an article is deleted
    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }
//the state with the array
    state = {
        article: []
        
    };
//a get method that calls the data from api/articles and displays them
    componentDidMount() {
        axios.get('http://localhost:4000/api/articles')
            .then((response) => {
                this.setState({ article: response.data })
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
            this.setState({ article: response.data });
          })
          .catch((error) => {
            console.log(error);
          });
   }
//displays articles and calls the reload data function
    render() {
        return (
            <div>
                <News article={this.state.article} ReloadData={this.ReloadData}></News>
            </div>
        );
    }
}