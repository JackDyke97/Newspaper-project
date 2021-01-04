import React from 'react';
import axios from'axios';

export class Edit extends React.Component {
    constructor(){
        super();
        //binding the onchange functions
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);

        //set the inputs for the forms
        this.state = {
            Title: '',
            Author: '',
            Text: '',
            Image: ''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/articles' +this.props.match.params.id)
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
        alert("Article: " + this.state.Title + " " + this.state.Author + " " + this.state.Text + " " + this.state.Image);
        const newArticle = {
            title:this.state.Title,
            author:this.state.Author,
            text:this.state.Text,
            image:this.state.Image,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/articles'+this.state._id, newArticle)
        .then(res =>{
            console.log(res.data)
        })
        .catch((err=>{
            console.log(err);
        }))
}
        render() {
            return(
                <div className="App">
                <form onSubmit={this.onSubmit}></form>
                {/* first div tag is for input control
                    The other tags are for setting the title,author,image and text respectively  
                    The label is used to show the text on our website
                    the  input allows us to define what type we want and to tyle it using className
                    and also to define the value that is called*/}
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