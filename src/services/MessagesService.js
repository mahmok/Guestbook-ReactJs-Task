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
        return await (await fetch("http://www.mocky.io/v2/5ebb0bc03600006000f7e51b")).json();
    }


    
}