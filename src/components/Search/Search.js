import React  , {Component} from "react";
import PropertyService from "../../services/PropertyService";

export default class Search extends Component{
    constructor(props){
        super(props);

        this.state ={
            search_results:[],
            search_text :'',
            response: null
        }
        this.search = this.search.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }
    onChangeSearch(e){
        this.setState({
            search_text: e.target.value
        });
    }
    async search(){
        let {search_text} = this.state;
        
        let results = await PropertyService.searchProperties(search_text);
        this.setState({
            search_results: results
        });
    }
    render(){
        let { search_results} = this.state;
        return (
            <section className="search-section ">
                <div className="container shadow p-0">
                    <div className="input-group">
                        <input type="search" className="form-control" name="search" id="search" 
                        placeholder="Key word search ..." onChange={this.onChangeSearch}/>
                        <div className="input-group-append">
                            <button className="input-group-text btn btn-outline-primary" onClick={this.search}>
                                <i className="fa fa-search mr-1"></i> Search
                            </button>
                        </div>
                    </div>
                    <div className="search-result">
                        <ul className="list-group list-group-flush bg-light">
                            {search_results && search_results.map((item, index) => {
                                return(
                                    <li className="list-group-item d-inline-flex">
                                        <div className="d-inline mr-1">
                                            <img src={item.image} alt=""   width="48px" height="48px"/>
                                        </div>
                                        <div className="d-inline">
                                            <h6 className="text-primary my-0">{item.name}
                                                <span className="pull-right text-dark small font-italic">Ksh {item.deposit}</span>
                                            </h6>
                                            <p className="text-black-50 my-0">
                                                <small>{item.description.slice(0,100)} ...</small>
                                                <a href={`/properties/${item.id}`} className="pull-right">View</a>
                                            </p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        );

    }
}

