import Http from "./http";

class MessageService{
    //get all messages
    async getAll(){
        let messages = [];
        await Http.get("/messages/")
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
        await Http.get(`/messages/${messageId}`)
            .then(res =>{
                messages = res.data
            })
            .catch( err => {
                console.log({err})
            });
        return messages;
    }

    //get a paged data
    async getByPage(page,size){
        let messages = [];
        await Http.get(`/messages/page`,
            {
                params:{
                    "page": page,
                    "size": size
                }
            }
        )
           .then( res => {
                messages = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return messages;
    }

    //save messages
    async send(data){
        let response = null;
        await Http.post("/messages/", data)
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
        await Http.put(`/messages/${messageId}`,data)
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
        let URL = messageId === undefined ? '/messages/read' : `/messages/${messageId}/read`
        
        await Http.put(URL)
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
        await Http.delete(`/messages/${messageId}`)
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
        await Http.delete("/messages/")
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