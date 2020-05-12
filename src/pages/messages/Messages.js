import React from 'react';
import './Messages.css';
import MessageItem from '../../components/message-item/MessageItem';
import APIClient from '../../services/APIClient';

export default class MessagesPage extends React.Component {
    
    constructor(props)
    {
        super(props)
        //Add other attributes here
        this.state = {
            email: "",
            password: ""
        }
    }

    async componentDidMount()
    {
        //APIs should be called here in this method.

        
        console.log("Component Mounted")
        console.log(await (new APIClient().getMessagesService().getMessages()));
    }

    
    onCardClick(id)
    {
        console.log(id);
        this.props.history.push(`/messages/${id}`);
    }

    renderMessages(){
        const messages = [];
        //Replace this from backend
        // The id should be replaced with mongodb ID
        for(let i = 0; i < 10; i++)
        {
            messages.push(
                <MessageItem 
                    key={i} 
                    name="Mahmoud Mokhtar" 
                    message="Here is a demo message." 
                    timestamp="13/05/2020" 
                    avatar={null}
                    onCardClick={() => this.onCardClick(i) } 
                />
            )
        }
        return messages;
    }

    
    render() {
      return(
        <div className="main-container">
            <h2>Messages</h2>
            <div className="messages-container" >
                {this.renderMessages()}
            </div>
        </div>
      );
    }
}