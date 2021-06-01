import React , {Component} from "react";

export default  class AboutPage extends Component{
    render(){
        return (
            <main>
                <div className="container py-2">

                    <div id="about">
                        <h2 className="text-center main-title">About Us</h2>
                        <p className="text-center lead">
                            <span className="text-primary mr-1">HouseTab</span> is a Residential Real Estate Online Platform. While many real estate online platforms offer property services such as development, appraisal, marketing, selling, leasing, and management, our main focus if to offer affordable and secure homes for individuals and families within Egerton fraternity. HouseTab offers a platform for real estate agents to upload their properties for listing at a monthly subscription.
                        </p>
                    </div>
                    <div className="row my-3" id="services">
                        <div className="col-12 mb-2">
                            <h2 className="text-center section-title">What we do</h2>
                        </div>
                    </div>
                    {/*services loop here*/}
                    <div className="mb-1 services">
                        <div className="service">
                            <div className="card">
                                <div className="card-header">
                                   <h4 className="card-title">Property Listing</h4>
                                </div>
                                <div className="card-body">
                                    <p className="lead card-text">
                                        Single-family dwellings, apartments, Attached and Villas 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="service">
                            <div className="card">
                                <div className="card-header">
                                   <h4 className="card-title">Brokage</h4>
                                </div>
                                <div className="card-body">
                                    <p className="lead card-text">Facilitating secure deposit transaction between tenants and property owners</p>
                                </div>
                            </div>
                        </div>
                        <div className="service">
                            <div className="card">
                                <div className="card-header">
                                   <h4 className="card-title">Sales and Marketing</h4>
                                </div>
                                <div className="card-body">
                                    <p className="lead card-text">Creating marketing materials and selling inventories</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-2">
                        <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <i className="fa fa-check-square text-primary"></i> Affordability
                            </li>
                            <li className="list-inline-item">
                                <i className="fa fa-check-square text-primary"></i> Security
                            </li>
                            <li className="list-inline-item">
                                <i className="fa fa-check-square text-primary"></i> Trust
                            </li>
                        </ul>
                    </div>
                    {/*end of services loop*/}
                    <div className="row mb-2 team">
                        <div className="col-12 mb-1">
                            <h2 className="section-title text-center">Our Team</h2>
                        </div>
                        <div className="col-12 mb-2 members">
                            {/*team members loop here*/}
                            <div className="card bg-transparent border-secondary member">
                                <img src="./images/jeunice.jpg" alt="" className="card-img-top w-100" />
                                    <div className="card-body member-body">
                                        <h5 className="card-title">Mwakisha Jeunice</h5>
                                        <h6 className="card-subtitle">Backend Developer</h6>
                                    </div>
                            </div>
                            <div className="card bg-transparent border-secondary member">
                                <img src="./images/wachiye.jpg" alt="" className="card-img-top w-100" />
                                    <div className="card-body member-body">
                                        <h5 className="card-title">Wachiye Sirah</h5>
                                        <h6 className="card-subtitle">Frontend Developer </h6>
                                    </div>
                            </div>
                            <div className="card bg-transparent border-secondary member">
                                <img src="./images/wachiye.jpg" alt="" className="card-img-top w-100" />
                                    <div className="card-body member-body">
                                        <h5 className="card-title">Ogembo Eugene</h5>
                                        <h6 className="card-subtitle">Backend Developer </h6>
                                    </div>
                            </div>
                            <div className="card bg-transparent border-secondary member">
                                <img src="./images/wachiye.jpg" alt="" className="card-img-top w-100" />
                                    <div className="card-body member-body">
                                        <h5 className="card-title">Mwendwa Dennis</h5>
                                        <h6 className="card-subtitle">Frontend Developer</h6>
                                    </div>
                            </div>
                            <div className="card bg-transparent border-secondary member">
                                <img src="./images/xavier.jpg" alt="" className="card-img-top w-100" />
                                    <div className="card-body member-body">
                                        <h5 className="card-title">Oduor Xavier</h5>
                                        <h6 className="card-subtitle">Backend Developer</h6>
                                    </div>
                            </div>
                            {/*end of loop*/}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                            <h5>Read More</h5>
                            <ul className="list-inline links">
                                <a href="/testimonials" className="list-inline-item">Testimonials</a>
                                <a href="/terms-and-conditions" className="list-inline-item">Terms & Conditions</a>
                                <a href="/privacy-policy" className="list-inline-item">Privacy Policy</a>
                                <a href="/selling-with-us" className="list-inline-item">Selling With Us</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
