import React from 'react';
import { Form } from 'react-bootstrap';


export class Create extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);

        this.state = {
            Title: '',
            Author: '',
            Image: '',
            Text: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        })
    }

    onChangeAuthor(e) {
        this.setState({
            Author: e.target.value
        })
    }

    onChangeText(e) {
        this.setState({
            Text: e.target.value
        })
    }

    onChangeImage(e) {
        this.setState({
            Image: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        alert("Article: " + this.state.Title);
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.onSubmit}></form>
                <div className="form-group">
                    <label>Add Article Title</label>
                    <input type='text' className='form-control' value={this.state.Title} onChange={this.onChangeTitle}></input>
                </div>
                <div className="form-group">
                    <label>Add Article Author</label>
                    <input type='text' className='form-control' value={this.state.Author} onChange={this.onChangeAuthor}></input>
                </div>
                <div className="form-group">
                    <label>Add Article Text</label>
                    <input type='text' className='form-control' value={this.state.Text} onChange={this.onChangeText}></input>
                </div>
                <div className="form-group">
                    <label>Add Article Image</label>
                    <textarea type='text' className='form-control' value={this.state.Image} onChange={this.onChangeImage}></textarea>
                </div>
                <div className="form-group">
                    <input type='submit' value='Add Article' className='btn btn-primary'></input>
                </div>
            </div>
        );
    }
}