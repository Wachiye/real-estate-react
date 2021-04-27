export default function queryParams(param){
    var query = window.location.search.substring(1);
    var params = query.split("&");

    for (let i = 0; i < params.length; i++) {
        const keyValue = params[i].split("=");
        if( keyValue[0] === param){
            return keyValue[1];
        }
    }

    return false;
}