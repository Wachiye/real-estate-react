import Http from "./http";

class DepositService{
    //get all deposits
    async getAll(){
        let deposits = [];
        await Http.get("/deposits")
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
        await Http.get(`/deposits/${id}`)
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
        await Http.get(`/deposits/recent`)
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
        await Http.get(`/agents/${agentId}/deposits/`)
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
        await Http.get(`/agents/${agentId}/deposits/${depositId}`)
           .then( res => {
                deposit = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return deposit;
    }
    
    //get a paged data
    async getByPage(page,size){
        let deposits = [];
        await Http.get(`/deposits/page`,
            {
                params:{
                    "page": page,
                    "size": size
                }
            }
        )
           .then( res => {
                deposits = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return deposits;
    }

    async pay(pay_data){
        let response = null;
        let {data} = await Http.post("/deposits/mpesa/pay", pay_data);
        response = data;
        console.log({response});
        return response;
    }

    async checkPay(checkout_id){
        let response = null;
        let {data} = await Http.get(`/deposits/check/${checkout_id}`);
        response = data;
        console.log({data});
        return response;
    }
    //save deposit
    async save(data){
        let response = null;
        console.log(data);
        await Http.post(`/deposits/`, data)
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
        await Http.delete(`/deposits/${depositId}`)
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
        await Http.delete(`/deposits/`)
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
        await Http.post(`/deposits/${depositId}/reverse`, data)
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