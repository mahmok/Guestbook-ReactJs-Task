import React from 'react';
import './MessageDetails.css';

/**
 * This page should edit/delete messages.
 */
export default class MessageDetailsPage extends React.Component {
    

    constructor(props)
    {
        super(props)
        const { params } = this.props.match; //Route params :id
        this.params = params;
        //Add other attributes here
        this.state = {
            email: "",
            password: ""
        }
    }

    componentDidMount()
    {
        //APIs should be called here in this method.
        console.log("Component Mounted")
    }

    
    render() {
      return(
        <div className="main-container">
            <h2>Message Details: {this.params.id} </h2>
            <div className="message-container" >
              
            </div>
        </div>
      );
    }
}