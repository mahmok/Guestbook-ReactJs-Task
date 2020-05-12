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
            messages: []
        }
    }

    async componentDidMount()
    {
        //APIs should be called here in this method.

        
        console.log("Component Mounted")
        const messages = await (new APIClient().getMessagesService().getMessages());
        this.setState({messages})


    }

    
    onCardClick(id)
    {
        console.log(id);
        this.props.history.push(`/messages/${id}`);
    }

    renderMessages(){
        const messages = this.state.messages;
        return messages.map(m =><MessageItem 
            key={m._id} 
            name={m.name} 
            message={m.message}
            timestamp={m.timestamp} 
            avatar={null}
            onCardClick={() => this.onCardClick(m._id) } 
        />);
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