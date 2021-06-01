import axios from "axios";

const baseURL = "http://localhost:8080/api";

const Http = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-type": "application/json",
    },
});

Http.interceptors.response.use( (res) => {
    
    if(res.status === 204){
        res = {
            data: {
                title:"Operation Successful",
                type:"success",
                message: "Operation was successful. No data returned"
            }
        }  
    }

    return res;

}, (err) => {

    if(err.request){
        return {
            data: {
                code: 500,
                name: 'connection_err',
                title:"SERVER_CONNECTION_ERR",
                type:"error",
                message: 'Sorry, but could not connect to the server. Try again later.'
            }
        };
    }

});

export default Http;
export {baseURL};