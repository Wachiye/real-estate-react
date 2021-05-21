import Http from "./http";

class SubscriptionService{
    //get all subscriptions
    async getAll(){
        let subscriptions = [];
        await Http.get("/subscriptions")
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
        await Http.get(`/subscriptions/${id}`)
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
        await Http.get(`/subscriptions/recent`)
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
        await Http.get(`/agents/${agentId}/subscriptions/`)
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
        await Http.get(`/agents/${agentId}/subscriptions/${subscriptionId}`)
            .then( res => {
                subscription = res.data
            })
            .catch( err => {
                console.log({err});
            })
        return subscription;
    }
    //get a paged data
    async getByPage(page,size){
        let subscriptions = [];
        await Http.get(`/subscriptions/page`,
            {
                params:{
                    "page": page,
                    "size": size
                }
            }
        )
           .then( res => {
                subscriptions = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return subscriptions;
    }

    //save subscription
    async subscribe(data){
        let response = null;
        console.log(data);
        await Http.post(`/subscriptions/`, data)
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
        await Http.delete(`/subscriptions/${subscriptionId}`)
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
        await Http.delete(`/subscriptions/`)
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