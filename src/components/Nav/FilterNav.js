const FilterNav = () => {
    return (
        <div className="filter-nav-items">
            <div className="form-row mb-1">
                <div className="col-12">Price Range</div>
                <div className="col-4 col-md-5">
                    <input type="number" name="price_min" id="price_min"
                           className="form-control form-control-sm" min="0" placeholder="Min" />
                </div>
                <div className="col-4 col-md-5">
                    <input type="number" name="price_max" id="price_max"
                           className="form-control form-control-sm" min="200" placeholder="Max" />
                </div>
                <div className="col-4 col-md-2">
                    <button className="btn btn-block btn-sm apply-btn" id="apply-price-btn">
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
                        <a className="dropdown-item" href="./properties.html?location=loc_1">Loc
                            1
                            <span className="badge badge-danger pull-right">8</span>
                        </a>
                        <a className="dropdown-item" href="./properties.html?location=loc_2">Loc
                            2
                            <span className="badge badge-danger pull-right">4</span>
                        </a>
                        <a className="dropdown-item" href="./properties.html?location=loc_n">Loc
                            n
                            <span className="badge badge-danger pull-right">2</span>
                        </a>
                        <a className="dropdown-item" href="./properties.html?location=all">All
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="form-row mb-1">
                <div className="col-sm-4">Capacity</div>
                <div className="col-sm-8">
                    <button className="btn btn-sm dropdown-toggle" data-toggle="dropdown">
                        Select Capacity
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item"
                           href="./properties.html?capacity=single_room">Single Room
                            <span className="badge badge-danger pull-right">4</span>
                        </a>
                        <a className="dropdown-item"
                           href="./properties.html?capacity=bed_sitter">Bed Sitter
                            <span className="badge badge-danger pull-right">7</span>
                        </a>
                        <a className="dropdown-item"
                           href="./properties.html?capacity=one_bed_room">1 Bed Room
                            <span className="badge badge-danger pull-right">1</span>
                        </a>
                        <a className="dropdown-item" href="./properties.html?capacity=all">All
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="form-row mb-1">
                <div className="col-12">Sort</div>
                <div className="col-sm-7">
                    <button className="btn btn-sm dropdown-toggle"
                            data-toggle="dropdown">
                        Sort By
                    </button>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item " data-sort-field="price">Price
                        </li>
                        <li className="dropdown-item" data-sort-field="capacity">Capacity
                        </li>
                        <li className="dropdown-item" data-sort-field="time">Time
                            Uploaded
                        </li>
                        <li className="dropdown-item" data-sort-field="all">Default
                            (time)
                        </li>
                    </ul>
                </div>
                <div className="col-sm-4">
                    <div className="form-check-inline">
                        <input type="radio" className="form-check-input"
                               name="sort_type" value="asc" />
                        <label htmlFor="asc" className="form-check-label mr-1">ASC</label>
                        <input type="radio" className="form-check-input"
                               name="sort_type" value="desc" />
                        <label htmlFor="desc"
                               className="form-check-label">DESC</label>
                    </div>
                    <button className="btn btn-sm btn-block apply-btn"
                            id="apply-sort-btn">Apply Sort
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FilterNav;