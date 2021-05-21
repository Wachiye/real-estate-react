import axios from "axios";

const baseURL = "https://dfed33f017e9.ngrok.io/api";

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
                message: "Operation was successful. No data returned"
            },
            error:null
        }  
    }

    return res;

}, (err) => {

    if(err.request){
        let  data = {
            "data": [],
            "error": {
                code: 500,
                name: 'connection_err',
                message: 'Could not connect to the server. Check your internet connection and try again'
            }
        }
        return data;
    }
});

export default Http;
export {baseURL};