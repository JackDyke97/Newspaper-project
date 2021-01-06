import React from 'react';
import axios from'axios';
import { Col, Form, Row } from 'react-bootstrap';

//create component used to display in the app 

export class Edit extends React.Component {

    constructor() {
        super();
//binding the onChange functions 
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
//Set the actual inputs for the forms
        this.state = {
            Title: '',
            Author: '',
            Text: '',
            Image: ''
        }
    }
//using a get component method to call the function in our server which is going to grab the id and allow us to edit it
    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/articles/' +this.props.match.params.id)
        .then(response=>{
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Author:response.data.author,
                Text:response.data.text,
                Image:response.data.image
            })
        })
        .catch((error)=>{
            console.log(error);
         })
    }

//The onchange functions for title, year and poster. These are used to target the values we enter
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeAuthor(e){
        this.setState({
            Author: e.target.value
        });
    }

    onChangeText(e){
        this.setState({
            Text: e.target.value
        });
    }

    onChangeImage(e){
        this.setState({
            Image: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        alert("Article Updatedj:" + this.state.Title +" ");

        const editArticle = {
            title:this.state.Title,
            author:this.state.Author,
            text: this.state.Text,
            image: this.state.Image,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/articles/'+this.state._id, editArticle, )
        .then(res =>{
            console.log(res.data)
        })
        .catch((err=>{
            console.log(err);
        }))
    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <Form.Row>
                        <Col>
                        <label>Edit Article Title:</label>
                        <input type='text' className='form-control' placeholder="Title" value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                            </Col>
                            <Col>
                            <label>Edit Article Author:</label>
                        <input type='text' placeholder="Author" className='form-control' value={this.state.Author}
                            onChange={this.onChangeAuthor}>
                        </input>
                        </Col>
                        </Form.Row>
                        <div className="form-group">
                        <label>Edit Text:</label>
                        <input type='text' className='form-control' placeholder="Insert Text Here" value={this.state.Text}
                            onChange={this.onChangeText}>
                        </input>
                        </div>
                        <div className='form-group'>
                            <label>Edit Article Picture:</label>
                            <textarea type='text' className='form-control' placeholder="Link your picture here" value={this.state.Image}
                                onChange={this.onChangeImage}>

                            </textarea>
                        </div>
                    <div className="form-group">
                        <input type='submit' className='btn btn-primary' value='Edit Article'>
                        </input>
                    </div>
                </form>

            </div>
        );
    }
}