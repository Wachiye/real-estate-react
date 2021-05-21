import axios from  "axios";
const cloud_name = "wachiye";
const upload_preset = "4RealEstate";

const upload_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

const uploadFile = async (file) =>{

    let formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", upload_preset);

    let file_url = null;
    
    let {data} = await axios.post( upload_url, formData);
    file_url = data.secure_url;

    return file_url;
}

export default uploadFile;