import axios from "axios";

class SubscriptionService{
    //get all subscriptions
    async getAll(){
        let subscriptions = [];
        await axios.get("http://localhost:8080/api/subscriptions")
            .then( res => {
                subscriptions = res.data
            })
            .catch( err => {
                console.log({err});
            })
        return subscriptions;
    }
    //get a single subscriptions
    async getOneById(id){
        let subscription = [];
        await axios.get(`http://localhost:8080/api/subscriptions/${id}`)
            .then( res => {
                subscription = res.data
            })
            .catch( err => {
                console.log({err});
            })
        return subscription;
    }
    //get recent subscriptions
    async getRecent(){
        let subscriptions = [];
        await axios.get(`http://localhost:8080/api/subscriptions/recent`)
            .then( res => {
                subscriptions = res.data
            })
            .catch( err => {
                console.log({err});
            })
        return subscriptions;
    }
    //get all subscriptions of a particular agent
    async getAllByAgentId(agentId){
        let subscriptions = [];
        await axios.get(`http://localhost:8080/api/agents/${agentId}/subscriptions/`)
            .then( res => {
                subscriptions = res.data
            })
            .catch( err => {
                console.log({err});
            })
        return subscriptions;
    }
    //get a specific subscription of a particular agent
    async getOneByAgentId(agentId,subscriptionId){
        let subscription = [];
        await axios.get(`http://localhost:8080/api/agents/${agentId}/subscriptions/${subscriptionId}`)
            .then( res => {
                subscription = res.data
            })
            .catch( err => {
                console.log({err});
            })
        return subscription;
    }
    //save subscription
    async subscribe(data){
        let response = null;
        console.log(data);
        await axios.post(`http://localhost:8080/api/subscriptions/`, data)
            .then( res => {
                response = res.data
            })
            .catch( err => {
                console.log({err});
            })
        return response;
    }
    
    //delete subscription
    async delete(subscriptionId){
        let response = null;
        await axios.delete(`http://localhost:8080/api/subscriptions/${subscriptionId}`)
            .then( res => {
                response = res.data
            })
            .catch( err => {
                console.log({err});
            })
        return response;
    }
    //delete all subscriptions
    async deleteAll(){
        let response = null;
        await axios.delete(`http://localhost:8080/api/subscriptions/`)
            .then( res => {
                response = res.data
            })
            .catch( err => {
                console.log({err});
            })
        return response;
    }
}

export default new SubscriptionService();