import Http from "./http";

class PropertyService{
    //get all houses
    async getAll(){
        let houses = [];
        await Http.get("/houses")
           .then( res => {
               houses = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return houses;
    }
    //get a single houses
    async getOneById(id){
        let house = [];
        await Http.get(`/houses/${id}`)
           .then( res => {
                house = res.data
            })
            .catch( err => {
                console.log({err});
            })
        console.log(house);
       return house;
    }
    //get recent houses
    async getRecent(){
        let houses = [];
        await Http.get(`/houses/recent`)
           .then( res => {
                houses = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return houses;
    }
    //get all houses of a particular agent
    async getAllByAgentId(agentId){
        let houses = [];
        await Http.get(`/agents/${agentId}/houses/`)
           .then( res => {
                houses = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return houses;
    }
    //get a specific house of a particular agent
    async getOneByAgentId(agentId,houseId){
        let house = [];
        await Http.get(`/agents/${agentId}/houses/${houseId}`)
           .then( res => {
                house = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return house;
    }
    //get a specific house of a particular agent
    async searchProperties(keywords){
        let houses = [];
        await Http.get(`/houses/search`,
            {params:{
                keywords:keywords
            }
        })
           .then( res => {
                houses = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return houses;
    }

    //get a paged data
    async getByPage(page,size){
        let houses = [];
        await Http.get(`/houses/page`,
            {
                params:{
                    "page": page,
                    "size": size
                }
            }
        )
           .then( res => {
                houses = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return houses;
    }
    //save house
    async save(data){
        let response = null;
        
        await Http.post(`/houses/`, data)
           .then( res => {
               response = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return response;
    }
    //update  house
    async update(houseId, data){
        let response = null;
        await Http.put(`/houses/${houseId}`, data)
           .then( res => {
                response = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return response;
    }

    //delete house
    async delete(houseId){
        let response = null;
        await Http.delete(`/houses/${houseId}`)
           .then( res => {
               response = res.data || res.error;
             })
            .catch( err => {
                console.log({err});
            });
       return response;
    }
    //delete all houses
    async deleteAll(){
        let response = null;
        await Http.delete(`/houses/`)
           .then( res => {
                response = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return response;
    }
    //book house
    async book(houseId, data){
        let response = null;
        await Http.post(`/houses/${houseId}/book`, data)
           .then( res => {
                response = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return response;
    }
}

export default new PropertyService();