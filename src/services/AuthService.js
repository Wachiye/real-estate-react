import Http from "./http";

class AuthService{
    //login
    async login(username, password){
        let data = {
            "username": username,
            "password": password
        };
        let response = null;

        await Http.post("auth/login", data)
            .then(res =>{
                response = res.data
                //store token
                localStorage.setItem('token', res.data.token)
            })
            .catch( err => {
                console.log({err})
            });
        return response;
    }
    async logout(){
        let response = null;
        let token = this.getToken();
        let data = {
            "token": token
        }
        await Http.post("/auth/logout", data)
            .then(res =>{
                response = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return response;
    }

    getToken(){
        let token = localStorage.getItem('token');
        return token;
    }
    
    async isAuthenticated(){
        let token = this.getToken();
        let data = {
            "token": token
        }
        let response = false;
        await Http.post("/auth/verify", data)
            .then(res =>{
                response = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return response;
    }

    async changePassword(user_id, data){
        let response = null;
        await Http.post("/auth/pwd", data)
            .then(res =>{
                response = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return response;
    }

    async subscribe(data){
        let response = null;
        await Http.post("/auth/subscribe", data)
            .then(res =>{
                response = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return response;
    }
    async unsubscribe(data){
        let response = null;
        await Http.post("/auth/unsubscribe", data)
            .then(res =>{
                response = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return response;
    }
}

export default new AuthService()