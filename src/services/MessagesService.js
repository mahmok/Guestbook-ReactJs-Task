import LocalStorage from "../utils/LocalStorage";

export default class MessagesService 
{
    static instance;
    
    constructor(){
        if(MessagesService.instance){
            return MessagesService.instance;
        }
        this.instance = this;
        return this;
    }

    //Replace these with your routes. 
    async getMessages()
    {
        return await (await fetch("http://www.mocky.io/v2/5ebb27953600006000f7e578", 
            {
                method: "GET",
                headers: {
                    authorization: new LocalStorage().getUser().token
                }
            }
        
        )).json();
    }

    async getMessageById(id)
    {
        return await (await fetch("http://www.mocky.io/v2/5ebb27953600006000f7e578/" + id,
            {
                method: "GET",
                headers: {
                    authorization: new LocalStorage().getUser().token
                }
            }
        )).json();
    }

    async createMessage({message, userId, receiverId})
    {
        return await (await fetch("http://www.mocky.io/v2/5ebb27953600006000f7e578", 
            {
                method: "POST",
                body: JSON.stringify({message, userId, receiverId}),
                headers: {
                    authorization: new LocalStorage().getUser().token
                }
            }
        )).json();
    }

    async updateMessage({messageId, message}){
        return await (await fetch("http://www.mocky.io/v2/5ebb27953600006000f7e578/" + messageId, 
            {
                method: "PUT",
                body: JSON.stringify({message}),
                headers: {
                    authorization: new LocalStorage().getUser().token
                }
            }
        )).json();

    }

    async replyToMessage({messageId, reply}){
        return await (await fetch("http://www.mocky.io/v2/5ebb27953600006000f7e578/" + messageId, 
            {
                method: "PUT",
                body: JSON.stringify({reply}),
                headers: {
                    authorization: new LocalStorage().getUser().token
                }
            }
        )).json();

    }

    
}