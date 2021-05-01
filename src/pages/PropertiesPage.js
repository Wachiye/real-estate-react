import React , {Component} from "react";

import FilterNav from "../components/Nav/FilterNav";

import PropertyService from '../services/PropertyService';

export default  class PropertiesPage extends Component{
    constructor( props){
        super(props);

        this.state = {
            properties:[]
        }

        this.getAll = this.getAll.bind(this);
    }

    componentDidMount(){
        this.getAll();
    }

    async getAll(){
        let properties = await PropertyService.getAll();
        this.setState({
            properties: properties
        });
        console.log( this.state.properties);
    }
    render(){
        let {properties} = this.state;
        return (
            <main>
                <div className="container py-2">
                    <div className="row mb-2">
                        <div className="col-sm-8 offset-sm-2">
                            <h1 className="text-center main-title">Properties</h1>
                        </div>
                    </div>

                    <div className="row mb-3 properties-list">

                        <div className="col-sm-12 col-lg-4 mb-2 d-none d-lg-block filter-nav">
                            <FilterNav />
                        </div>
                        <div className="col-lg-8 mb-2 ">

                            <div className="filter-nav-show position-fixed d-lg-none"
                                 style={{top:"50%", zIndex:"2", marginLeft:"-10px"}}>
                                <i className="fa fa-2x fa-caret-left"></i>
                            </div>

                            <div className="properties">
                                {properties && properties.map((item, index)=>{
                                    return(
                                        <div className="property" id="property-1" key={index}>
                                            <div className="property-image">
                                                <img src="./images/single-room-1.jpg" alt=""
                                                    className="img-thumbnail img-fluid" />
                                            </div>
                                            <div className="property-body p-2">
                                                <h3 className="title no-u">{item.houseName}</h3>
                                                <p className="desc">{item.description}</p>
                                                <p>Pay Ksh
                                                    <span className="text-success small price mx-1">
                                                        {item.price}
                                                    </span>
                                                    /month
                                                </p>
                                                <p> Book at Ksh
                                                    <span className="deposit mx-1">{item.deposit}</span>
                                                </p>
                                                <p>
                                                    <span className="stock text-muted mr-1">5</span> in stock
                                                </p>
                                                <div className="action">
                                                    <a href={`/checkout?property=${item.id}`} className="btn btn-warning">Book Now</a>
                                                    <a href={`/properties/${item.id}`}
                                                    className="btn btn-link float-lg-right"> Read
                                                        More</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-sm-4 mb-1">
                            <p>Page <span className="current-page mx-1 text-muted"> 1</span> of <span
                                className="pages text-primary">6</span></p>
                        </div>
                        <div className="col-6 col-sm-4 mb-1">
                            <select name="page_items" id="page_item">
                                <option disabled>Items per page</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                        <div className="col-6 col-sm-4 mb-1">
                            <ul className="pagination pagination-sm">
                                <li className="page-item disabled">
                                    <a className="page-link" href="?page=1">
                                        <i className="fa fa-arrow-left"> Previous</i>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="?page=2">
                                        <i className="fa fa-arrow-right"> Next</i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}