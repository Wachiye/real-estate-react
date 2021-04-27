import axios from "axios";

class UserService{
    //get all users
    async getAll(){
        let users = [];
        await axios.get("https://localhost:8080/api/users/")
            .then(res =>{
                users = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return users;
    }
    //get single user users
    async getOneById(userId){
        let users = [];
        await axios.get(`https://localhost:8080/api/users/${userId}`)
            .then(res =>{
                users = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return users;
    }
    //save users
    async save(data){
        let response = null;
        await axios.post("https://localhost:8080/api/users/", data)
            .then(res =>{
                response = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return response;
    }
    //update user
    async update(userId, data){
        let response = null;
        await axios.put(`https://localhost:8080/api/users/${userId}`,data)
            .then(res =>{
                response = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return response;
    }
    //update user
    async changeAccount(userId, data){
        let response = null;
        await axios.post(`https://localhost:8080/api/users/${userId}/account`,data)
            .then(res =>{
                response = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return response;
    }
    //update user
    async changeImage(userId, data){
        let response = null;
        await axios.post(`https://localhost:8080/api/users/${userId}/image`,data)
            .then(res =>{
                response = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return response;
    }
    //delete a single user
    async delete(userId){
        let response = null;
        await axios.delete(`https://localhost:8080/api/users/${userId}`)
            .then(res =>{
                response = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return response;
    }
    //delete all users
    async deleteAll(){
        let response = null;
        await axios.delete("https://localhost:8080/api/users/")
            .then(res =>{
                response = res.data
            })
            .catch( err => {
                console.log(err)
            });
        return response;
    }
}

export default new UserService();