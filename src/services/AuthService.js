import axios from "axios";

class AuthService{
    //login
    async login(username, password){
        let data = {
            "username": username,
            "password": password
        };
        let response = null;

        await axios.post("https://localhost:8080/api/auth/login", data)
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
        await axios.post("https://localhost:8080/api/auth/logout", data)
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
        await axios.post("https://localhost:8080/api/auth/verify", data)
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
        await axios.post("https://localhost:8080/api/auth/pwd", data)
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
        await axios.post("https://localhost:8080/api/auth/subscribe", data)
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
        await axios.post("https://localhost:8080/api/auth/unsubscribe", data)
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