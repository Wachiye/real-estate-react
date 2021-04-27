import React, {Component} from "react";
import queryParams from "../utils/queryParams";
import UserService from "../services/UserService";
import AuthService from "../services/AuthService";

export default class AccountPage extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            user: {},
            response:null,
            action:null,
            user_id:null,

            first_name: '',
            last_name:'',
            email:'',
            phone:'',
            location:'',
            image: {},

            current_password:'',
            new_password:'',
            confirm_password:'',

            till_number: '',
            business_name:'',
            account_name: ''
        }

        this.getOneById = this.getOneById.bind(this);
        this.updateAccount = this.updateAccount.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeAccount = this.changeAccount.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeCurrentPassword = this.onChangeCurrentPassword.bind(this);
        this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onChangeTillNumber = this.onChangeTillNumber.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeAccountName = this.onChangeAccountName.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
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
    onChangeLocation(e){
        this.setState({
            location:e.target.value
        });
    }
    onChangeCurrentPassword(e){
        this.setState({
            current_password:e.target.value
        });
    }
    onChangeNewPassword(e){
        this.setState({
            new_password:e.target.value
        });
    }
    onChangeConfirmPassword(e){
        this.setState({
            confirm_password:e.target.value
        });
    }
    onChangeTillNumber(e){
        this.setState({
            till_number:e.target.value
        });
    }
    onChangeBusinessName(e){
        this.setState({
            business_name:e.target.value
        });
    }
    onChangeAccountName(e){
        this.setState({
            account_name:e.target.value
        });
    }
    onChangeImage(e){
        this.setState({
            image:e.target.value
        });
    }

    async getOneById(){
        let id = queryParams("id");
        let user = await UserService.getOneById(id);
        this.setState({
            user_id: id,
            user: user
        });
    }
    async updateAccount(){
        let {user_id, first_name, last_name, phone, email, location} = this.state;
        let data = {
            "id": user_id,
            "first_name" : first_name,
            "last_name": last_name,
            "email" : email,
            "phone": phone,
            "location": location
        }
        let response = await UserService.update(user_id, data);
        this.setState({
            response: response
        });
    }
    async changePassword(){
        let {user_id, current_password, new_password, confirm_password} = this.state;
        let data = {
            "id": user_id,
            "current_password" : current_password,
            "new_password": new_password,
            "confirm_password" : confirm_password
        }
        let response = await AuthService.changePassword(user_id, data);
        this.setState({
            response: response
        });
    }
    async changeAccount(){
        let {user_id, business_name, account_name, till_number} = this.state;
        let data = {
            "id": user_id,
            "business_name": business_name,
            "account_name": account_name,
            "till_number": till_number
        }
        let response = await UserService.changeAccount(user_id, data);
        this.setState({
            response: response
        });
    }
    async changeImage(){
        let {user_id, image} = this.state;
        let data = {
            "id": user_id,
            "image":image
        }
        let response = await UserService.changeImage(user_id, data);
        this.setState({
            response: response
        });
    }
    async deleteAccount(){
        let {user_id} = this.state;
        let response = await UserService.delete(user_id);
        this.setState({
            response: response
        });
    }
    render(){
        let {user} = this.state;
        return(
            <div className="main-content">
                <div className="title">
                    <h3 className="text-primary">Account</h3>
                </div>
                <div className="container account">
                    <div className="profile">
                        <div className="image">
                            <img src="../images/member-1.jpg" alt="" className="img-thumbnail img-fluid"  width="200" height="200"/>
                        </div>
                        <div className="profile-details text-center">
                            <h4 className="text-primary">{user.first_name +' ' + user.last_name}</h4>
                            <ul className="list-inline mb-2">
                                <li className="list-inline-item">
                                    <i className="fa fa-envelope text-muted"></i>
                                    <a href={`mailto:${user.email}`}>{user.email}</a>
                                </li>
                                <li className="list-inline-item">
                                    <i className="fa fa-phone text-muted"></i>
                                    <a href={`tel:${user.phone}`}>{user.phone}</a>
                                </li>
                            </ul>
                            <button type="button" className="btn btn-light text-secondary" onClick={this.deleteAccount}>Delete Account</button>
                            <hr className="my-1" />
                            <ul className="nav nav-tabs justify-content-between text-md-left flex-md-column">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#details">
                                        <i className="fa fa-user-o"></i>
                                        <p className="d-none d-md-inline-block">Details</p>
                                        <span className="d-none d-md-block pull-right">
                                            <i className="fa fa-angle-right "></i>
                                        </span>

                                    </a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#security">
                                        <i className="fa fa-lock"></i>
                                        <p className="d-none d-md-inline-block">Security</p>
                                        <span className="d-none d-md-block pull-right">
                                            <i className="fa fa-angle-right "></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#payment">
                                        <i className="fa fa-bank"></i>
                                        <p className="d-none d-md-inline-block">Payment</p>
                                        <span className="d-none d-md-block pull-right">
                                            <i className="fa fa-angle-right "></i>
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#image">
                                        <i className="fa fa-camera"></i>
                                        <p className="d-none d-md-inline-block">Image</p>
                                        <span className="d-none d-md-block pull-right">
                                            <i className="fa fa-angle-right "></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content profile-data">

                        <div className="tab-pane active" id="details">
                            <h4 className="text-primary">
                                Personal Details
                            </h4>
                            <form action="#" name="details-form" id="details-form" method="post">
                                <div className="from-group mb-2">
                                    <label htmlFor="first_name">First Name</label>
                                    <input type="text" className="form-control" name="first_name" id="first_name"
                                        placeholder="First Name" value={user && user.first_name} onChange={this.onChangeFirstName}/>
                                </div>
                                <div className="from-group mb-2">
                                    <label htmlFor="last_name">Last Name</label>
                                    <input type="text" className="form-control" name="last_name" id="last_name"
                                        placeholder="Last Name" value={user && user.last_name} onChange={this.onChangeLastName}/>
                                </div>
                                <div className="from-group mb-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" id="email"
                                        placeholder="Email" value={user && user.email} onChange={this.onChangeEmail}  pattern="[a-z][0-9]@[a-z].[a-z]"/>
                                </div>
                                <div className="from-group mb-2">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" className="form-control" name="phone" id="phone"
                                        placeholder="Phone Number" value={user && user.phone} onChange={this.onChangePhone}  pattern="254(7|1)[0-9]{8}"/>
                                    <p className="form-text text-info">Format:2547/1xxxxxxxx</p>
                                </div>
                                <div className="from-group mb-2">
                                    <label htmlFor="location">Location</label>
                                    <input type="text" className="form-control" name="location" id="location"
                                        placeholder="Location" value={user && user.location} onChange={this.onChangeLocation}/>
                                </div>
                                <button type="button" className="btn btn-dark text-warning" onClick={this.updateAccount}>Update Details</button>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="security">
                            <h4 className="text-primary">Security Details</h4>
                            <form action="#" name="security-form" id="security-form">
                                <div className="form-group mb-2">
                                    <label htmlFor="current_pass">Current Password</label>
                                    <input type="password" className="form-control" name="current_pass" id="current_pass" placeholder="Current Password" onChange={this.onChangeCurrentPassword} required/>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="password">New Password</label>
                                    <input type="password" className="form-control" name="password" id="password" placeholder="New Password" onChange={this.onChangeNewPassword} required/>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="confirm_password">Confirm Password</label>
                                    <input type="password" className="form-control" name="confirm_password" id="confirm_password"
                                        placeholder="Confirm Password" onChange={this.onChangeConfirmPassword} required/>
                                </div>
                                <button type="button" className="btn btn-dark text-warning" onClick={this.changePassword}>Change Password</button>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="payment">
                            <h4 className="text-primary">Payment Details</h4>
                            <form action="#" name="payment-form" id="payment-form">
                                <div className="form-group mb-2">
                                    <label htmlFor="till_no">Mpesa Till Number</label>
                                    <input type="number" className="form-control" name="till_no" id="till_no" placeholder="Till Number" value={user && user.till_number} onChange={this.onChangeTillNumber}/>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="bus_name">Business Name</label>
                                    <input type="text" className="form-control" name="bus_name" id="bus_name" placeholder="Business Name" value={user && user.business_name} onChange={this.onChangeBusinessName}/>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="ac_name">Account Name</label>
                                    <input type="text" className="form-control" name="ac_name" id="ac_name" placeholder="Account Name" value={user && user.account_name} onChange={this.onChangeAccountName}/>
                                </div>
                                <button type="button" className="btn btn-dark text-warning" onChange={this.changeAccount}>Update Details</button>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="image">
                            <h4 className="text-primary">Image</h4>
                            <form action="" id="image-form" name="image-form">
                                <p className="text-muted">Formats: JPEG, PNG, JPG, GIF</p>
                                <p className="text-muted">Max Size: 2MB</p>
                                <div className="display-image mb-2">
                                    <input type="file" name="display_image" id="display_image" className="d-none"
                                        accept="*.png|*.jpeg|*.jpg|*.gif" data-preview-id="img-preview"  onChange={this.onChangeImage}/>
                                    <img src="" alt="" id="img-preview" />
                                    <div className="file-upload-btn" data-upload-id="display_image" >
                                        <i className="fa fa-camera"></i>
                                        Select Image
                                    </div>

                                </div>
                                <button type="button" className="btn btn-sm btn-primary" onChange={this.changeImage}>Upload</button>
                                <button className="btn btn-sm btn-outline-danger">Remove</button>
                            </form>
                        </div>

                    </div>
                </div>
                <div className="cta paging"></div>
            </div>
        )
    }
}