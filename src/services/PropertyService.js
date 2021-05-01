import axios from "axios";

class PropertyService{
    //get all houses
    async getAll(){
        let houses = [];
        await axios.get("http://localhost:8080/api/houses")
           .then( res => {
               console.log({res});
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
        await axios.get(`http://localhost:8080/api/houses/${id}`)
           .then( res => {
                house = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return house;
    }
    //get recent houses
    async getRecent(){
        let houses = [];
        await axios.get(`http://localhost:8080/api/houses/recent`)
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
        await axios.get(`http://localhost:8080/api/agents/${agentId}/houses/`)
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
        await axios.get(`http://localhost:8080/api/agents/${agentId}/houses/${houseId}`)
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
        await axios.get(`http://localhost:8080/api/houses/search`,
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
    //save house
    async save(data){
        let response = null;
        console.log(data);
        await axios.post(`http://localhost:8080/api/houses/`, data)
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
        await axios.put(`http://localhost:8080/api/houses/${houseId}`, data)
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
        await axios.delete(`http://localhost:8080/api/houses/${houseId}`)
           .then( res => {
                response = res.data
            })
            .catch( err => {
                console.log({err});
            })
       return response;
    }
    //delete all houses
    async deleteAll(){
        let response = null;
        await axios.delete(`http://localhost:8080/api/houses/`)
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
        await axios.post(`http://localhost:8080/api/houses/${houseId}/book`, data)
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