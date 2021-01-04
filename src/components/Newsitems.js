import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";


export class Newsitems extends React.Component {
    //Card function that calls title, author, text and image from our news array
    //this allows us to call it to news.js which sends it to our read.js

    //constructor to bind deleteArticle button to deleteArticle function
    constructor() {
        super();

        this.DeleteArticle = this.DeleteArticle.bind(this);
    }

    //function for delete article button
    DeleteArticle(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.article._id);

        axios.delete("http://localhost:4000/api/articles" + this.props.article._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }

    render() {
        return (
            <div>


                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.article.Title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{this.props.article.Author}</Card.Subtitle>
                        <img src={this.props.article.Image} width="250" height="200"></img>
                        <Card.Text>
                            {this.props.article.Text}
                        </Card.Text>
                    </Card.Body>
                    <Link to={"/edit/" + this.props.article._id} className="btn btn-primary">Edit Article</Link>

                    {/* delete button that calls our deleteArticle Function */}
                    <Button variant="danger" onClick={this.DeleteArticle}>
                        Delete
          </Button>

                </Card>
            </div>
        );
    }
}