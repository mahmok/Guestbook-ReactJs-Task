import LocalStorage from "../utils/LocalStorage";

export default class AuthService 
{
    static instance;
    
    constructor(){
        if(AuthService.instance){
            return AuthService.instance;
        }
        this.instance = this;
        return this;
    }

    async login({email, password})
    {
        return {email: "mahmok@gmail.com", name: "Mahmoud Mokhtar", token: "TOKEN HERE", _id: "1234"}
        /*
        return await (await fetch("http://www.mocky.io/v2/5ebb27953600006000f7e578", 
            {
                method: "POST",
                body: JSON.stringify({email, password})
            }
        
        )).json();
        */
    }

    async register({email, password, name})
    {
        return await (await fetch("http://www.mocky.io/v2/5ebb27953600006000f7e578", 
            {
                method: "POST",
                body: JSON.stringify({email, password, name})
            }
    
        )).json();
    }

    
}