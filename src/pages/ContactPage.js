import React , {Component} from "react";
import MessageService from "../services/MessageService";

export default  class ContactPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            response:null,
            first_name: '',
            last_name:'',
            email:'',
            phone:'',
            message:'',
        }
        this.sendMessage = this.sendMessage.bind(this);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
    }
    onChangeFirstName(e){
        this.setState({
            first_name:e.target.value
        });
    }
    onChangeLastName(e){
        this.setState({
            last_name:e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email:e.target.value
        });
    }
    onChangePhone(e){
        this.setState({
            phone:e.target.value
        });
    }
    onChangeMessage(e){
        this.setState({
            message:e.target.value
        });
    }

    async sendMessage(){
        let {first_name, last_name, phone, email, message} = this.state;
        let data = {
            "first_name" : first_name,
            "last_name": last_name,
            "email" : email,
            "phone": phone,
            "message": message
        }
        let response = await MessageService.send(data);
        this.setState({
            response: response
        });
    }
    render(){
        return (
            <main>
                <div className="container py-2">
                    <div className="row">
                        <div className="col-12 text-center ">
                            <h1 className="main-title">Contact Us</h1>
                            <p className="text-muted">Fill out this form and we shall get back to you as soon as possible <br/>
                            You can also get in touch using the contacts below</p>
                        </div>

                        <div className="col-md-6 mb-2">
                            <form action="#" name="contact-form" id="contact-form">
                                <div className="from-group mb-2">
                                    <label htmlFor="first_name">First Name</label>
                                    <input type="text" className="form-control" name="first_name" id="first_name"
                                        placeholder="First Name" onChange={this.onChangeFirstName}/>
                                </div>
                                <div className="from-group mb-2">
                                    <label htmlFor="last_name">Last Name</label>
                                    <input type="text" className="form-control" name="last_name" id="last_name"
                                        placeholder="Last Name" onChange={this.onChangeLastName}/>
                                </div>
                                <div className="from-group mb-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" id="email"
                                        placeholder="Email" onChange={this.onChangeEmail}  pattern="[a-z][0-9]@[a-z].[a-z]"/>
                                </div>
                                <div className="from-group mb-2">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" className="form-control" name="phone" id="phone"
                                        placeholder="Phone Number" onChange={this.onChangePhone}  pattern="254(7|1)[0-9]{8}"/>
                                    <p className="form-text text-info">Format:2547/1xxxxxxxx</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" className="form-control"
                                              placeholder="Your Message"
                                              rows="5" onChange={this.onChangeMessage}></textarea>
                                </div>
                                <button type="button" className="btn btn-dark" onClick={this.sendMessage}>Send Message</button>
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
                            <a href="/faqs" className="btn btn-warning">Frequently Asked Questions</a>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}