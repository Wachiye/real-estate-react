import axios from "axios";

class DepositService{
    //get all deposits
    async getAll(){
        let deposits = [];
        await axios.get("http://localhost:8080/api/deposits")
           .then( res => {
               console.log({res});
                deposits = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return deposits;
    }
    //get a single deposits
    async getOneById(id){
        let deposit = [];
        await axios.get(`http://localhost:8080/api/deposits/${id}`)
           .then( res => {
                deposit = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return deposit;
    }
    //get recent deposits
    async getRecent(){
        let deposits = [];
        await axios.get(`http://localhost:8080/api/deposits/recent`)
           .then( res => {
                deposits = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return deposits;
    }
    //get all deposits of a particular agent
    async getAllByAgentId(agentId){
        let deposits = [];
        await axios.get(`http://localhost:8080/api/agents/${agentId}/deposits/`)
           .then( res => {
                deposits = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return deposits;
    }
    //get a specific deposit of a particular agent
    async getOneByAgentId(agentId,depositId){
        let deposit = [];
        await axios.get(`http://localhost:8080/api/agents/${agentId}/deposits/${depositId}`)
           .then( res => {
                deposit = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return deposit;
    }
    
    //save deposit
    async save(data){
        let response = null;
        console.log(data);
        await axios.post(`http://localhost:8080/api/deposits/`, data)
           .then( res => {
                response = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return response;
    }
    
    //delete deposit
    async delete(depositId){
        let response = null;
        await axios.delete(`http://localhost:8080/api/deposits/${depositId}`)
           .then( res => {
                response = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return response;
    }
    //delete all deposits
    async deleteAll(){
        let response = null;
        await axios.delete(`http://localhost:8080/api/deposits/`)
           .then( res => {
                response = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return response;
    }
    //reverse deposit
    async reverse(depositId, data){
        let response = null;
        await axios.post(`http://localhost:8080/api/deposits/${depositId}/reverse`, data)
           .then( res => {
                response = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return response;
    }
}

export default new DepositService();