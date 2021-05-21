import React , {Component} from "react";

export default  class AboutPage extends Component{
    render(){
        return (
            <main>
                <div className="container py-2">

                    <div id="about">
                        <h2 className="text-center main-title">About Us</h2>
                        <p className="lead">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur reiciendis voluptatum
                            ullam,
                            sunt in quibusdam accusantium ab rem maxime fugit culpa vitae ratione magni sint facilis vel
                            eaque
                            molestias deserunt consequatur harum nihil repudiandae sapiente. Expedita sit eius, repellat
                            rerum
                            nulla eaque aperiam perspiciatis iste, tempore repudiandae quia quasi maxime!
                        </p>
                    </div>
                    <div className="row my-3" id="services">
                        <div className="col-12 mb-2">
                            <h2 className="text-center section-title">What we do</h2>
                        </div>
                    </div>
                    {/*services loop here*/}
                    <div className="row mb-1 service">
                        <div className="col-md-4">
                            <img src="./images/property-listing.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8 service-body">
                            <h4 className="title">Property Listing</h4>
                            <p className="lead">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate dicta aliquid
                                obcaecati sed
                                aut nostrum possimus consequatur quo delectus provident.
                            </p>
                        </div>

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
