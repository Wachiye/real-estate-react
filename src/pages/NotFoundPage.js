import React , {Component} from "react";

export default  class NotFoundPage extends Component{
    constructor(props){
        super(props);
        this.state={
            url:''
        }

        this.getUrl = this.getUrl.bind(this);
    }
    componentDidMount(){
        this.getUrl();
    }

    getUrl(){
        let url = window.location.href;
        this.setState({
            url:url
        });
    }
    render(){
        return(
            <main>
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-8 offset-2 ">
                            <div className="bg-light rounded shadow-sm p-2">
                                 <h1 className="text-center display-4 text-danger">404 Error!</h1>
                                <h3 className="text-center text-black-50 text-uppercase">
                                    <i className="fa fa-frown-o mr-1"></i>
                                    Page Not Found!
                                </h3>
                                <hr className="my-1" />
                                <p className="text-muted">Sorry, but the resource you are looking for can't be found on this server. </p>
                                <p>You are seeing this page because one of the following reasons apply:</p>
                                <ul style={{listStylePosition:"inside"}}>
                                    <li>You typed a WRONG URL</li>
                                    <li>The URL is broken</li>
                                    <li>The resource does not exist</li>
                                    <li>The resource was move permanently and redirection failed</li>
                                    <li style={{textDecoration:"line-through"}}>The Server is down</li>
                                </ul>
                                <p className="text-muted">Ensure that the resource link 
                                    <span className="text-danger mx-1">{this.state.url}</span> is correct and try again.
                                </p>
                                <hr className="my-1" />
                                <div>
                                    <a href="/properties" className="btn btn-sm btn-primary ml-1 ">Properties Page</a>
                                    <a href="/" className="btn btn-sm btn-secondary pull-right">Home Page</a>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
