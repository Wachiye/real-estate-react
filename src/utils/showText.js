import * as $ from "jquery";

const showText = (text, id) =>{
    $(`#${id}`).text(text);
}

export default showText;