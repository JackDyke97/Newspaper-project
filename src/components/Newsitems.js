import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Container } from "react-bootstrap";


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

        axios.delete("http://localhost:4000/api/articles/" + this.props.article._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }

//Below: div containing the styling for how our data is displayed on the read page
//Card is used for individual components
//this.props is used to call title,image, text, and author 
//Link is used for sending the user to the edit page
//delete button calls the delete article function when clicked
    render() {
        return (
            <div className='App' style={{ display: 'inline-block', justifyContent:'center', flexDirection: 'row'}}>
                <Card>
                    <Container>
                        <Card.Body>
                            <Card.Title> {this.props.article.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> {this.props.article.author}</Card.Subtitle>
                            <img src={this.props.article.image} width="350" height="400"></img> <br />

                            <Card.Text> {this.props.article.text}</Card.Text>

                            <Link to={"/edit/" + this.props.article._id} style={{ height: 100, width: 100 }} className="btn btn-lg btn-warning"> Edit Article</Link>

                            {/* delete button that calls our deleteArticle Function */}
                            <Button style={{ height: 100, width: 100 }} variant="danger" size="lg" onClick={this.DeleteArticle}>
                                Delete
                     </Button>
                        </Card.Body>
                    </Container>
                </Card>
            </div>
        );


    }

}
