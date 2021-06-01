import  React, {Component} from "react";
import PropertyService from "../services/PropertyService";
import queryParams from "../utils/queryParams";
import { showAlert, showConfirmAlert } from "../utils/showAlert";

export default class AdminPropertiesPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            action : null,
            houseId : null,
            properties:[]
        }

        this.getProperties = this.getProperties.bind(this);
        this.deleteProperty = this.deleteProperty.bind(this);
    }
    componentDidMount(){
        let action = queryParams("action");
        let id = queryParams("id");
        this.setState({
            action : action,
            houseId :id
        });
        this.getProperties();
    }
    async getProperties(){
        let properties = await PropertyService.getAll();
        this.setState({
            properties: properties
        });
    }
    
    async deleteProperty(id){
        let response = null;
        showConfirmAlert('DELETE','Property').then( async confirm => {
            if(confirm){
                response = await PropertyService.delete(id);
                this.setState({
                    response: response
                });

                showAlert(response);
            }
        });

    }
    render() {
        let {properties} = this.state;
        return(
            <>
                <div className="title no-u">
                    <h3 className="text-primary d-inline-block">Properties</h3>
                    <a href="/admin/addProperty" className="btn btn-sm deco-none btn-success d-inline-block">New</a>
                </div>
                
                <div className="card bg-transparent border-0">
                    <div className="card-body ">
                        <table className="table table-bordered table-responsive-lg bg-light">
                            <thead>
                            <tr>
                                <th>
                                    <input type="checkbox" name="select-all" id="select-all" />
                                </th>
                                <th>
                                    Image
                                </th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Stock</th>
                                <th>Slots</th>
                                <th>Views</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody className="properties">
                                {properties && properties.map((item, index)=>{
                                    return(
                                        <Property property={item} deleteFunction={()=>this.deleteProperty(item.id)} key={index} />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="cta paging">

                </div>
            </>
        )
        
    }
}

const Property = ({property, deleteFunction}) => {
    return(
        <tr className="admin-property">
            <td className="select-col">
                <input type="checkbox" name="select-all[]" id={`select-all-${property.id}`} data-select-value={property.id} />
            </td>
            <td className="d-flex align-items-center justify-content-center img-col">
                <img src={property.image} alt=""   width="48px" height="48px"/>
            </td>
            <td className="name-col">
                {property.name}
            </td>
            <td className="type-col">{property.type}</td>
            <td className="stock-col">{property.stock}</td>
            <td className="slots-col">{property.slots}</td>
            <td className="views-col">{property.views}</td>
            <td className="date-col">{property.created_at?.slice(0,10) || ''}</td>
            <td className="text-center action-col">
                <div className="list-inline">
                    <a href={`/admin/addProperty?action=edit&id=${property.id}`}
                        className="list-inline-item btn btn-sm text-success fa fa-edit edit-property-btn">Edit</a>
                    <button
                        className="list-inline-item btn btn-sm text-danger fa fa-trash remove-property-btn" onClick={deleteFunction}>Delete</button>
                </div>
            </td>
        </tr>
    );
}