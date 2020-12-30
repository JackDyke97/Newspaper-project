import React from 'react';
import { News } from './News';
import axios from 'axios';


export class Read extends React.Component {

    state = {
        articles: [
            // {
            //     "Title": "Spider-Man Menace",
            //     "Author": "Jack",
            //     "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFnHUBbTO3u5PPKUH4ZKghShjLja6TTFdqg&usqp=CAU"
            // },
            // {
            // "Title": "Spider-Man Menace",
            //     "Author": "Jack",
            //     "Image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFnHUBbTO3u5PPKUH4ZKghShjLja6TTFdqg&usqp=CAU"
            // }
        ]
    }

    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/2f879259-4ab2-11eb-99b0-fb0785ae1f74')
            .then((response) => {
                this.setState({ articles: response.data.Articles })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <h1>The Daily Bugle</h1>
                <News articles={this.state.articles}></News>
            </div>
        );
    }
}