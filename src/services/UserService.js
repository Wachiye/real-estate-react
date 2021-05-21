import Http from "./http";

class UserService{
    //get all users
    async getAll(){
        let users = [];
        await Http.get("/agents/")
            .then(res =>{
                users = res.data;
            })
            .catch( err => {
                console.log({err})
            });
        return users;
    }
    //get single user users
    async getOneById(userId){
        let users = [];
        await Http.get(`/users/${userId}`)
            .then(res =>{
                users = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return users;
    }

    //get a paged data
    async getByPage(page,size){
        let users = [];
        await Http.get(`/users/page`,
            {
                params:{
                    "page": page,
                    "size": size
                }
            }
        )
           .then( res => {
                users = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return users;
    }

    //save users
    async save(data){
        let response = null;
        await Http.post("/users/", data)
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
        await Http.put(`/users/${userId}`,data)
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
        await Http.post(`/users/${userId}/account`,data)
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
        await Http.post(`/users/${userId}/image`,data)
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
        await Http.delete(`/users/${userId}`)
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
        await Http.delete("/users/")
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