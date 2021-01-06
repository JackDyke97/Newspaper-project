import React from 'react';
import { News } from './News';
import axios from 'axios';



export class Read extends React.Component {

    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        article: []
        
    };

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

    render() {
        return (
            <div>
                
                <News article={this.state.article} ReloadData={this.ReloadData}></News>
            </div>
        );
    }
}