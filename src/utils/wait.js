function wait(seconds){
     var start  = new Date().getTime();
     var end = start;

     while( end < start + (seconds * 1000)){
         end = new Date().getTime();
    }
}

export default wait;