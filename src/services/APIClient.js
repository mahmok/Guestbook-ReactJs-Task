import MessagesService from "./MessagesService";

export default class APIClient 
{
    messagesService = new MessagesService();
    static instance;

    constructor(){
        if(APIClient.instance){
            return APIClient.instance;
        }
        this.instance = this;
        return this;
    }


    getMessagesService(){
        return this.messagesService;
    }



}