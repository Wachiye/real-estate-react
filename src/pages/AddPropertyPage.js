import React, {Component} from "react";
import queryParams from "../utils/queryParams";
import PropertyService from "../services/PropertyService";

export default class AddPropertyPage extends Component{
    constructor(props){
        super(props);

        this.state ={
            property:{},
            response:null,

            name :'',
            description:'',
            location:'',
            capacityUnit: '',
            capacity: '',
            type:'',
            price:0,
            deposit:0,
            stock:1,
            image:{},
            images:[]
        }

        this.getOneById = this.getOneById.bind(this);
        this.save = this.save.bind(this);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeCapacityUnit = this.onChangeCapacityUnit.bind(this);
        this.onChangeCapacity = this.onChangeCapacity.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeDeposit = this.onChangeDeposit.bind(this);
        this.onChangeStock = this.onChangeStock.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeImages = this.onChangeImages.bind(this);
    }

    componentDidMount(){
        let action = queryParams("action");
        
        if(action === "edit"){
            this.getOneById();
        }
    }
    async getOneById(){
        let id = queryParams("id");
        let property = await PropertyService.getOneById(id);
        this.setState({
            property: property
        });
    }
    async save(){
        let id = queryParams("id");
        let action = queryParams("action");
        let response = null;

        let data = {
            "name" : this.state.name,
            "description":this.state.description,
            "location":this.state.location,
            "capacityUnit": this.state.capacityUnit,
            "capacity": this.state.capacity,
            "stock": this.state.stock,
            "type": this.state.type,
            "price": this.state.price,
            "deposit": this.state.deposit,
            "image": this.state.image,
            "images": this.state.images
        };

        if(action === "edit" && id !== null){
            response = await PropertyService.update(id,data);
        }
        else{
            response = await PropertyService.save(data);
        }
        this.setState({
            response:response
        });
    }

    onChangeName(e){
        this.setState({
            name:e.target.value
        });
    }
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        });
    }
    onChangeType(e){
        this.setState({
            type:e.target.value
        });
    }
    onChangeLocation(e){
        this.setState({
            location:e.target.value
        });
    }
    onChangeCapacityUnit(e){
        this.setState({
            capacityUnit:e.target.value
        });
    }
    onChangeCapacity(e){
        this.setState({
            capacity:e.target.value
        });
    }
    onChangePrice(e){
        this.setState({
            price:e.target.value
        });
    }
    onChangeDeposit(e){
        this.setState({
            deposit:e.target.value
        });
    }
    onChangeStock(e){
        this.setState({
            stock:e.target.value
        });
    }
    onChangeImage(e){
        this.setState({
            image:e.target.files[0]
        });
    }
    onChangeImages(e){
        this.setState({
            images:e.target.files
        });
    }
    
    render() {
        return(
            <>
                <div className="title no-u">
                    <h3 className="text-primary">Add New Property</h3>
                </div>
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-12">
                            <div className="card bg-transparent border-0 h-100 p-0">
                                <div className="card-body p-0">
                                    <form action="#" id="property-form" name="property-form" method="post"encType="multipart/form-data">
                                        <div className="form-row">
                                            <div className="col-md-6 mb-1">
                                                <div className="basic-details h-100">
                                                    <h4 className="title no-u text-primary">
                                                        Basic Details
                                                    </h4>
                                                    <div className="form-group">
                                                        <label htmlFor="name">Property Name</label>
                                                        <input type="text" className="form-control " id="name" name="name" onChange={this.onChangeName}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="desc">Property Description</label>
                                                        <textarea className="form-control " id="desc" name="desc"
                                                                  rows="5" onChange={this.onChangeDescription}></textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="type">Property Type</label>
                                                        <select className="form-control " id="type" name="type" onChange={this.onChangeType}>
                                                            <option value="#" disabled className="text-muted">Select Type
                                                            </option>
                                                            <option value="1">Single Room</option>
                                                            <option value="1">Single Room</option>
                                                            <option value="1">Single Room</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="capacity_unit">Capacity Unit</label>
                                                        <select className="form-control " id="capacity_unit" name="capacity_unit" onChange={this.onChangeCapacityUnit}>
                                                            <option value="1" disabled className="text-muted">Select Capacity
                                                                Unit
                                                            </option>
                                                            <option value="1">Rooms</option>
                                                            <option value="1">Occupants</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="capacity">Capacity</label>
                                                        <input type="text" className="form-control " id="capacity"
                                                               name="capacity" onChange={this.onChangeCapacity}/>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-1">
                                                <div className="other-details mb-1">
                                                    <h4 className="title no-u text-primary">
                                                        Stock , Location and Deposit Amount
                                                    </h4>
                                                    <div className="form-group">
                                                        <label htmlFor="stock">Stock or Slots available</label>
                                                        <input type="number" className="form-control " id="stock" name="stock"
                                                               min="1" value="1" onChange={this.onchangeStock}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="location">Property Location</label>
                                                        <select className="form-control " id="location" name="location">
                                                            <option value="#" disabled className="text-muted" onChange={this.onChangeLocation}>Select Location
                                                            </option>
                                                            <option value="1">Njoks</option>
                                                            <option value="1">Gates</option>
                                                            <option value="1">Right</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="price">Deposit</label>
                                                        <input type="number" className="form-control " id="price"
                                                               name="price" min="1" value="1" onChange={this.onChangePrice}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="deposit">Deposit</label>
                                                        <input type="number" className="form-control " id="deposit"
                                                               name="deposit" min="1" value="1" onChange={this.onChangeDeposit}/>
                                                    </div>
                                                </div>
                                                <div className="other-details">
                                                    <h4 className="title no-u text-primary">
                                                        Display Image
                                                        <small className="text-muted font-italic">
                                                            (select 1 featured image)
                                                        </small>
                                                    </h4>
                                                    <p className="text-muted">Formats: JPEG, PNG, JPG, GIF</p>
                                                    <p className="text-muted">Max Size: 2MB</p>
                                                    <div className="display-image">
                                                        <input type="file" name="image" id="image"
                                                               className="d-none" accept="*.png|*.jpeg|*.jpg|*.gif"
                                                               data-preview-id="img-preview" onChange={this.onChangeImage} />
                                                       <img src="" alt="" id="img-preview" />
                                                        <div className="file-upload-btn" data-upload-id="image" >
                                                            <i className="fa fa-camera"></i>
                                                            Upload Image
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-1">
                                                <div className="other-details">
                                                    <h4 className="title no-u text-primary d-inline">
                                                        Other Images
                                                        <small className="text-muted font-italic">
                                                            (select 4 images)
                                                        </small>
                                                    </h4>
                                                    <button type="button" className="btn btn-sm btn-outline-warning d-inline file-upload-btn"
                                                            data-upload-id="images">Upload
                                                    </button>
                                                    <input type="file" name="images[]" id="images"
                                                           className="d-none" accept="image/*" multiple max="4"
                                                           data-preview-className="img-preview" onChange={this.onChangeImages}/>
                                                    <div className="display-images my-1 py-2">
                                                        <div className="image d-inline">
                                                            <img src="" alt="" className="img-thumbnail img-preview"
                                                                 width="90px" height="90px" />
                                                            <span className=" remove-img">
                                                                &times;
                                                            </span>
                                                        </div>
                                                        <div className="image d-inline">
                                                            <img src="" alt="" className="img-thumbnail img-preview"
                                                                 width="90px" height="90px" />
                                                            <span className=" remove-img" >
                                                                &times;
                                                            </span>
                                                        </div>
                                                        <div className="image d-inline">
                                                            <img src="" alt="" className="img-thumbnail img-preview"
                                                                 width="90px" height="90px" />
                                                            <span className=" remove-img" >
                                                                &times;
                                                            </span>
                                                        </div>
                                                        <div className="image d-inline">
                                                            <img src="" alt="" className="img-thumbnail img-preview"
                                                                 width="90px" height="90px" />
                                                            <span className=" remove-img" >
                                                                &times;
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="button" className="btn btn-sm btn-secondary px-2"> Preview</button>
                                                <button type="button" className="btn btn-sm btn-primary px-2" onClick={this.save}>Publish</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}