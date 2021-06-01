const randomColor =() => {
    return 'rgb(' + rands() + "," + rands() + "," + rands() + ')';
}

function rands(){
    return Math.floor(Math.random() * 255);
}

export default randomColor;