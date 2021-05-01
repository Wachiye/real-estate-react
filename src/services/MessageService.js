import axios from "axios";

class MessageService{
    //get all messages
    async getAll(){
        let messages = [];
        await axios.get("https://localhost:8080/api/messages/")
            .then(res =>{
                messages = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return messages;
    }
    //get single message messages
    async getOneById(messageId){
        let messages = [];
        await axios.get(`https://localhost:8080/api/messages/${messageId}`)
            .then(res =>{
                messages = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return messages;
    }
    //save messages
    async send(data){
        let response = null;
        await axios.post("https://localhost:8080/api/messages/", data)
            .then(res =>{
                response = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return response;
    }
    //update message
    async update(messageId, data){
        let response = null;
        await axios.put(`https://localhost:8080/api/messages/${messageId}`,data)
            .then(res =>{
                response = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return response;
    }
    //mark as read
    async markAsRead(messageId){
        let response = null;
        let URL = messageId === undefined ? 'https://localhost:8080/api/messages/read' : `https://localhost:8080/api/messages/${messageId}/read`
        
        await axios.put(URL)
            .then(res =>{
                response = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return response;
    }
    //delete a single message
    async delete(messageId){
        let response = null;
        await axios.delete(`https://localhost:8080/api/messages/${messageId}`)
            .then(res =>{
                response = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return response;
    }
    //delete all messages
    async deleteAll(){
        let response = null;
        await axios.delete("https://localhost:8080/api/messages/")
            .then(res =>{
                response = res.data
            })
            .catch( err => {
                console.log(err)
            });
        return response;
    }
}

export default new MessageService();