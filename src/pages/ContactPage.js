import React , {Component} from "react";

export default  class ContactPage extends Component{
    render(){
        return (
            <main>
                <div className="container py-2">
                    <div className="row">
                        <div className="col-12 text-center ">
                            <h1 className="main-title">Contact Us</h1>
                            <p className="text-muted">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptates officiis, quam
                                porro
                                placeat pariatur.
                            </p>
                        </div>

                        <div className="col-md-6 mb-2">
                            <form action="#" name="contact-form" id="contact-form">
                                <div className="form-group">
                                    <label htmlFor="first_name">First Name</label>
                                    <input type="text" name="first_name" id="first_name" className="form-control"
                                           placeholder="First Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="last_name">Last Name</label>
                                    <input type="text" name="last_name" id="last_name" className="form-control"
                                           placeholder="Last Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control"
                                           placeholder="Email Address" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" name="phone" id="phone" className="form-control"
                                           placeholder="Phone Number" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" className="form-control"
                                              placeholder="Your Message"
                                              rows="5"></textarea>
                                </div>
                                <input type="submit" className="btn btn-dark" value="Send Message"/>
                            </form>
                        </div>

                        <div className="col-md-6 mb-2">
                            <div className="card bg-transparent shadow h-100">
                                <div className="card-body">
                                    <h5 className="card-title text-muted">Direct Contact</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            Email
                                            <span className="text-muted float-right"> example@gmail.com</span>
                                        </li>
                                        <li className="list-group-item">
                                            Phone
                                            <span className="text-muted float-right"> 2547-123-45678</span>
                                        </li>
                                        <li className="list-group-item">
                                            Address
                                            <span className="text-muted float-right"> Egerton 536</span>
                                        </li>
                                        <li className="list-group-item pt-4">
                                            <div className="card bg-transparent border-0 position-relative" id="map">
                                        <span className="icon position-absolute"
                                              style={{left:"50%", transform:"translate(-50%,-50%)"}}>
                                            <i className="fa fa-2x fa-map-marker"></i>
                                        </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-8 offset-2 text-center mb-2">
                            <a href="index.html" className="btn btn-warning">Frequenty Asked Questions</a>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}