import React , {Component} from "react";
import queryParams from "../utils/queryParams";
import Subscribe from "../components/Auth/Subscribe";
import PropertyService from "../services/PropertyService";
import AuthService from "../services/AuthService";
import DepositService from "../services/DepositService";

import showText from "../utils/showText";

import {baseURL} from "../services/http";
import wait from "../utils/wait";

export default  class CheckoutPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            property:{},
            response:null,

            first_name:'',
            last_name:'',
            email:'',
            phone:'',
            slots: 1,
            mpesa_phone:'',
            mpesa_code:'',

            sub_username:'',
            sub_email:''
        }

        this.getOneById = this.getOneById.bind(this);
        this.book = this.book.bind(this);
        this.subscribe = this.subscribe.bind(this);

        this.onChangeSubUsername = this.onChangeSubUsername.bind(this);
        this.onChangeSubEmail = this.onChangeEmail.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeSlots = this.onChangeSlots.bind(this);
        this.onChangeMpesaPhone = this.onChangeMpesaPhone.bind(this);
        this.onChangeMpesaCode = this.onChangeMpesaCode.bind(this);

        this.pay = this.pay.bind(this);
    }

    componentDidMount(){
        this.getOneById();
    }

    async getOneById(){
        let id = queryParams("property");
        let property = await PropertyService.getOneById(id);
        this.setState({
            property: property
        });
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
    onChangeSlots(e){
        this.setState({
            slots:e.target.value
        });
    }
    onChangeMpesaPhone(e){
        this.setState({
            mpesa_phone: e.target.value
        });
    }
    onChangeMpesaCode(e){
        this.setState({
            mpesa_code: e.target.value
        });
    }
    async getRecentProperties(){
        let properties = await PropertyService.getRecent();
        this.setState({
            recentProperties: properties
        });
    }

    onChangeSubUsername(e){
        this.setState({
            sub_username: e.target.value
        });
    }
    onChangeSubEmail(e){
        this.setState({
            sub_email: e.target.value
        });
    }

    async pay(){
        showText("Please Wait","pay-btn");
        let { mpesa_phone, slots, property }  = this.state;
        let amount = slots > 1 ? slots * property.deposit : property.deposit;
        let purpose = `PAY FOR PROPERTY ${property.id}`;

        let pay_data = {
            "phone": mpesa_phone,
            "amount": amount,
            "purpose": purpose,
            "callback_url":   `${baseURL}/deposits/mpesa/process`
        };

        let response = await DepositService.pay(pay_data);
        showText(response.CustomerMessage,"pay-btn");

        wait(10);
        
        let {data} = await DepositService.checkPay(response.CheckoutRequestID);

        console.log(data);

        // if(data.mpesa_code !== null){
        //     $('#mpesa_code').val(data.mpesa_code);
        // }

    }
    async subscribe(){
        let {sub_username, sub_email} = this.state;
        let data = {
            "username": sub_username,
            "email": sub_email
        }
        let response = await AuthService.subscribe(data);

        this.setState({
            response: response
        });
    }
    async book(){
        let {property, first_name, last_name, email, phone, mpesa_phone, mpesa_code, slots} = this.state;
        let data = {
            "property_id": property.id,
            "slots" : slots,
            "first_name": first_name,
            "last_name": last_name,
            "email":email,
            "phone": phone,
            "mpesa_phone": mpesa_phone,
            "mpesa_code": mpesa_code
        }
        let response = await PropertyService.book(property.id,data);
        this.setState({
            response: response
        });
    }
    render(){
        let {property, slots} = this.state;
        return (
            <main>
                <div className="container py-2">
                    <div className="row mb-2">
                        <div className="col-sm-8 offset-sm-2">
                            <h1 className="text-center main-title">Checkout</h1>
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-md-8 mb-2">

                            <div className="card bg-transparent border-success mb-1">
                                <h3
                                    className="card-header text-center bg-success text-capitalize text-light"
                                >
                                    Confirm Your Choices
                                </h3>
                                <div className="card-body">
                                    <table className="table table-responsive-lg table-bordered">
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Type</th>
                                            <th>Location</th>
                                            <th>Deposit(once)</th>
                                            <th>Max Capacity</th>
                                            <th>Slots</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {property && <Property property={property} />}
                                           
                                        <tr>
                                            <th colSpan="3" className="text-right">Total Deposit</th>
                                            <td colSpan="3">Ksh <span className="amount">{slots > 1 ? slots * property.deposit : property.deposit}</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card bg-transparent border-info mb-1">
                                <h3
                                    className="card-header text-center bg-info text-capitalize text-light"
                                >
                                    Confirm Your Details
                                </h3>
                                <div className="card-body">
                                    <form action="" name="client-form" id="client-form">
                                        <div className="form-group">
                                            <label htmlFor="first_name">First Name</label>
                                            <input
                                                type="text"
                                                id="first_name"
                                                name="first_name"
                                                className="form-control form-control-sm"
                                                placeholder="First Name"
                                                onChange={this.onChangeFirstName}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="last_name">Last Name</label>
                                            <input
                                                type="text"
                                                id="last_name"
                                                name="last_name"
                                                className="form-control form-control-sm"
                                                placeholder="Last Name"
                                                onChange={this.onChangeLastName}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control form-control-sm"
                                                placeholder="Email Address "
                                                onChange={this.onChangeEmail}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="form-control form-control-sm"
                                                placeholder="Phone  Number"
                                                onChange={this.onChangePhone}
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card bg-transparent border-info mb-1">
                                <h3
                                    className="card-header text-center bg-info text-capitalize text-light"
                                >
                                    Deposit For Booking
                                </h3>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-1">
                                            <form action="" name="deposit-form" id="deposit-form">
                                                <div className="form-group">
                                                    <label htmlFor="slots">Booking Slots</label>
                                                    <input
                                                        type="number"
                                                        id="slots"
                                                        name="slots"
                                                        className="form-control form-control-sm"
                                                        placeholder="Slots To Book"
                                                        onChange={this.onChangeSlots}
                                                        min="1" max={property.slots}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="mpesa_phone">Phone</label>
                                                    <input
                                                        type="tel"
                                                        id="mpesa_phone"
                                                        name="mpesa_phone"
                                                        className="form-control form-control-sm"
                                                        placeholder="2547/1XXXXXXXX"
                                                        onChange={this.onChangeMpesaPhone}
                                                        pattern="254(7|1)[0-9]{8}"
                                                    />
                                                    <span className="form-text text-info small">Enter phone number used in the transaction. Format 254(7/1)XXXXXXXX</span>
                                                    <button type="button"
                                                        className="btn btn-warning btn-sm deposit-btn"
                                                        id="pay-btn" onClick={this.pay}
                                                    >Pay Now</button>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="mpesa_code">Transaction CODE</label>
                                                    <input
                                                        type="text"
                                                        id="mpesa_code"
                                                        name="mpesa_code"
                                                        className="form-control form-control-sm"
                                                        placeholder="MPESA Transaction CODE"
                                                        onChange={this.onChangeMpesaCode} disabled
                                                    />
                                                </div>
                                                <button type="button"
                                                    className="btn btn-warning btn-sm deposit-btn d-none"
                                                    id="deposist-btn" onClick={this.book}
                                                >
                                                    Book Property
                                                </button>
                                            </form>
                                        </div>
                                        <div className="col-md-6 mb-1 details">
                                            <p className="lead">
                                                Pay deposit of Ksh <span className="amount">{slots > 1 ? slots * property.deposit : property.deposit}</span> to
                                                Mpesa Till Number
                                                <span className="pay-bill-no ml-1">137415</span>
                                            </p>
                                            <p>If your Booking is accepted, you will be required to pay Ksh {slots > 1 ? slots * property.price : property.price} /month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card bg-transparent border-info">
                                <h3 className="text-center bg-transparent text-capitalize text-info">
                                    How To pay(manually)
                                </h3>
                                <div className="card-body">
                                    <p className="card-text">
                                        On the M-PESA Menu Go to "Lipa Na M-PESA Select Buy Goods
                                        <br/>
                                        Enter the Till Number of the outlet/or sales person you wish
                                        to pay <br/>
                                        Enter the amount you wish to pay (between KSHs.50 –
                                        KSHs.70,000) <br/>
                                        Enter your M-PESA PIN. <br/>
                                        Confirm that all details are correct and press OK <br/>
                                        You will receive a confirmation SMS from M-PESA immediately.
                                    </p>
                                </div>
                            </div>
                            <Subscribe height={false} onChangeEmail={this.onChangeSubEmail} onChangeUsername={this.onChangeSubUsername} subscribeFunction={this.subscribe}/>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const Property = ({property}) => {
    return(
        <tr>
            <td>
                <a href={`/properties/${property.id}`}>{property.name}</a>
            </td>
            <td>{property.type}</td>
            <td>{property.location}</td>
            <td>{property.deposit}</td>
            <td>{`${property.capacity} ${property.capacity_unit}`}</td>
            <td>{property.slots}</td>  
        </tr>   
    );
}