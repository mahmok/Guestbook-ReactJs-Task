import React from 'react';
import './MessageDetails.css';
import APIClient from '../../services/APIClient';
import LocalStorage from '../../utils/LocalStorage';

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
            message: {},
            showDeleteButton: false,
            showEditButton: false
        }
    }

    async componentDidMount()
    {
        const message = await (new APIClient().getMessagesService().getMessageById(this.params.id))
        const user = new LocalStorage().getUser();
        this.setState({
            message,
            showDeleteButton: user._id === message.receiverId? true: false
        })
    }

    showDeleteButton()
    {
        if(this.state.showDeleteButton)
        {
            return <button>DELETE</button>
        }
        return null;
    }

    
    render() {
      return(
        <div className="main-container">
            <h2>Message Details: {this.params.id} </h2>
            <div className="message-container" >
              {this.showDeleteButton()}
              <input type="text" value={this.state.message.message} />
            </div>
        </div>
      );
    }
}