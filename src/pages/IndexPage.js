import React , {Component} from "react";
import Subscribe from "../components/Auth/Subscribe";
import AuthService from "../services/AuthService";
import PropertyService from "../services/PropertyService";

export default  class IndexPage extends Component{
    constructor(props){
        super(props);

        this.state ={
            recentProperties:[],
            siteInfo: [],
            response:null,

            username:'',
            email:''
        }

        this.getRecentProperties = this.getRecentProperties.bind(this);
        this.subscribe = this.subscribe.bind(this);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);

    }

    componentDidMount(){
        this.getRecentProperties();
    }
    async getRecentProperties(){
        let properties = await PropertyService.getRecent();
        this.setState({
            recentProperties: properties
        });
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }

    async subscribe(){
        let {username, email} = this.state;
        let data = {
            "username": username,
            "email": email
        }
        let response = await AuthService.subscribe(data);

        this.setState({
            response: response
        });
    }
    render(){
        let {recentProperties} = this.state;
        return (
            <main>
                <div className="container py-2">
                   <div className="row mb-2">
                        <div className="col-sm-8 offset-sm-2">
                            <h1 className="text-center main-title">Welcome</h1>
                            <p className="lead">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ducimus atque doloremque
                                est
                                quasi cum nobis, eaque dicta facere quisquam assumenda ratione eveniet nulla animi
                                fugiat optio.
                                Placeat, adipisci cum!
                            </p>
                            <a href="./about.html">
                                <i className="fa fa-arrow-right"> Read More</i>
                            </a>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-12 mb-2">
                            <h2 className="text-center section-title">Recent Uploads</h2>
                        </div>
                        {recentProperties && recentProperties.map( (item, index) => {
                            return(
                                <div className="col-md-4 mb-1">
                                    <div className="card h-100 recent-upload">
                                        <div className="card-img-top">
                                            <img src="./images/single-room-1.jpg" alt="" className="img-thumbnail img-fluid" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">${item.name}</h5>
                                            <p className="card-text">${item.description}</p>
                                            <p className="card-text">
                                                <span className="pull-left text-success small">
                                                    Ksh ${item.price}/months
                                                </span>
                                                        <span className="pull-right">
                                                    Book at Ksh ${item.deposit}
                                                </span>
                                            </p>
                                            <div className="clearfix"></div>
                                            <a href={`/properties/${item.id}`}
                                            className="card-link btn btn-sm btn-primary pull-right"> View</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        
                        {/*loop end */}
                    </div>

                    <div className="row mb-2">
                        <div className="col-md-6 mb-2">
                            <div className="card h-100 bg-transparent border-warning">
                                <div className="card-header bg-warning text-center">Advertise with us</div>
                                <div className="card-body">
                                    <p className="card-text text-primary">
                                        Do you own rental houses? Increase your market share by advertising with us on a
                                        monthly or yearly plan starting from as low as Ksh
                                        <span className="text-success ml-1"> 2000 </span>.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-2">
                            <Subscribe height={true} onChangeEmail={this.onChangeEmail} onChangeUsername={this.onChangeUsername} subscribeFunction={this.subscribe}/>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
