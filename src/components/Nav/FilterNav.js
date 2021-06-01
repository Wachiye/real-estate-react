import React from "react";
const FilterNav = props => {
    return (
        <div className="filter-nav-items">
            <div className="form-row mb-1">
                <div className="col-12">Price Range</div>
                <div className="col-4 col-md-5">
                    <input type="number" name="price_min" id="price_min"
                           className="form-control form-control-sm" min="0" placeholder="Min" onChange={props.onChangePriceMin}/>
                </div>
                <div className="col-4 col-md-5">
                    <input type="number" name="price_max" id="price_max"
                           className="form-control form-control-sm" min="200" placeholder="Max" onChange={props.onChangePriceMax} />
                </div>
                <div className="col-4 col-md-2">
                    <button type="button" className="btn btn-block btn-sm btn-info apply-btn" id="apply-price-btn" onClick={props.filterFunction}>
                        <i className="fa fa-filter"></i>
                    </button>
                </div>
            </div>
            <hr />
            <div className="form-row mb-1">
                <div className="col-sm-4">Location</div>
                <div className="col-sm-8">
                    <button className="btn btn-sm dropdown-toggle" data-toggle="dropdown">
                        Select Location
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="./properties?location=njoro">
                            Njoro
                            <span className="badge badge-danger pull-right">2</span>
                        </a>
                        <a className="dropdown-item" href="./properties?location=gate">
                            Gate
                            <span className="badge badge-danger pull-right">8</span>
                        </a>
                        <a className="dropdown-item" href="./properties?location=right">
                            Right
                            <span className="badge badge-danger pull-right">8</span>
                        </a>
                        <a className="dropdown-item" href="./properties?location=njokerio">
                            Njokerio
                            <span className="badge badge-danger pull-right">4</span>
                        </a>
                        
                        <a className="dropdown-item" href="./properties">All
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="form-row mb-1">
                <div className="col-sm-4">Category</div>
                <div className="col-sm-8">
                    <button className="btn btn-sm dropdown-toggle" data-toggle="dropdown">
                        Select Category 
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="./properties?category=single">
                            Single
                            <span className="badge badge-danger pull-right">2</span>
                        </a>
                        <a className="dropdown-item" href="./properties?category=bed_sitter">
                            Bed Sitter
                            <span className="badge badge-danger pull-right">8</span>
                        </a>
                        <a className="dropdown-item" href="./properties?category=house">
                            House
                            <span className="badge badge-danger pull-right">8</span>
                        </a>
                        <a className="dropdown-item" href="./properties">All
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="form-row mb-1">
                <div className="col-12">Sort</div>
                <div className="col-sm-7">
                    <select className="form-control form-control-sm" name="sort" id="sort" onChange={props.onChangeSort}>
                        <option value="capacity">Capacity</option>
                        <option value="deposit">Deposit/Booking Amount</option>
                        <option value="price">Monthly Price</option>
                    </select>
                </div>
                <div className="col-sm-4">
                    <button type="button" className="btn btn-sm btn-block btn-info apply-btn"
                        id="apply-sort-btn" onClick={props.sortFunction}>Sort
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FilterNav;