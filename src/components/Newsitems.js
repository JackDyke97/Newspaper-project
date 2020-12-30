import React from 'react';
import Card from 'react-bootstrap/Card';


export class Newsitems extends React.Component {

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
                </Card>
            </div>
        );
    }
}