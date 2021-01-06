import React from 'react';
import { Link } from 'react-router-dom';


export class Content extends React.Component {
    //Home page containing logo, tagline and a link to the read component

    render() {
        return (
            <div>
                <img src="../../images/logo.jpg" />
                <h2 style={{fontStyle:'italic'}}>New York's Finest Daily Paper</h2>
                <div className="form-group">
                        <Link to={"/Read"} type='submit' className='btn btn-success'><h1>Enter Here</h1></Link>
                        
                    </div>
            </div>
         
        );
    }
}