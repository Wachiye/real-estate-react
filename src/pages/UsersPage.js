import React, {Component} from "react";
import queryParams from "../utils/queryParams";
import UserService from "../services/UserService";
import {showAlert, showConfirmAlert} from "../utils/showAlert";

export default class UsersPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            users:[],
            response: null
            
        }
        
        this.getAllUsers = this.getAllUsers.bind(this);
        this.getOneById = this.getOneById.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        
    }

    componentDidMount(){
        this.getAllUsers();
    }

    async getAllUsers(){
        let users = await UserService.getAll();
        this.setState({
            users: users,
            data_length: users.length
        });
    }
    async getOneById(){
        let id = queryParams("id");
        let users = await UserService.getOneById(id);
        this.setState({
            users: users,
            data_length: users.length
        });
    }
    async deleteUser(id){
        let response = null;
        showConfirmAlert('DELETE','user account').then( async confirm => {
            if(confirm){
                response = await UserService.delete(id);
                this.setState({
                    users: this.state.users.filter( u => u.id !== id),
                    response: response
                });

                showAlert(response);
            }
        });
    }

    render(){
        let {users} = this.state;

        return(
            <div className="main-content">
                <div className="title no-u">
                    <h3 className="text-primary d-inline-block">Users</h3>
                    <div className="pull-right">
                        <a href="/admin/users?action=add" className="btn btn-sm deco-none btn-success mr-1">New</a>
                        <a href="#broadcast" className="btn btn-sm deco-none btn-primary " data-toggle="modal" data-target="#broadcast">Broadcast</a>
                        <div className="modal show" id="broadcast">
                            <div className="modal-dialog modal-dialog-centered" role="dialog">
                                <div className="modal-content" role="document">
                                    <div className="modal-header">
                                        <h4>Send Broadcast User to selected </h4>
                                        <button className="close" data-dismiss="modal">
                                            &times;
                                        </button>
                                    </div>
                                    <div className="modal-body text-left">
                                        <form action="" id="comment-form" name="comment-form">
                                            <div className="form-group">
                                                <label htmlFor="title">User Title</label>
                                                <input type="text" name="title" id="title" className="form-control"
                                                    placeholder="User Title"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="User">User</label>
                                                <textarea name="User" id="User" className="form-control" placeholder="Your User"
                                                    rows="5"></textarea>
                                            </div>
                                            <button type="button" className="btn btn-dark">Send Broadcast</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card bg-transparent border-0">
                    <div className="card-body ">
                        <table className="table table-bordered table-striped table-responsive-lg ">
                            <thead>
                                <tr>
                                    <th>
                                        <input type="checkbox" name="select-all" id="select-all" />
                                    </th>
                                    <th>
                                        Image
                                    </th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Type</th>
                                    <th>Properties</th>
                                    <th>Subscription</th>
                                    <th>Date Joined</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="users">
                                {users && users.map( (user, index) => {
                                    return(
                                        <tr className={user.type} key={index}>
                                            <td className="select-col">
                                                <input type="checkbox" className="select" name="select" id={`select-${user.id}`} data-select-value={user.id} />
                                            </td>
                                            <td className="img-col">
                                                <img src={user.image || ''} alt=""  width="48" height="48"/>
                                            </td>
                                            <td className="name-col">{`${user.name} || ${user.first_name} ${user.last_name}`}</td>
                                            <td className="email-col">{user.email ||''}</td>
                                            <td className="phone-col">{user.phone || ''}</td>
                                            <td className="type-col">{user.type }</td>
                                            <td className="properties-col">{user.properties || 0}</td>
                                            <td className="active-col">{user.isActive ? 'Active' : 'Inactive'}</td>
                                            <td className="date-col">{user.date}</td>
                                            <td className="text-center action-col">
                                                <div className="list-inline">
                                                    <a href={`/admin/users?action=edit&id=${user.id}`} className="list-inline-item btn btn-sm text-success">
                                                        <i className="fa fa-edit"></i>
                                                    </a>
                                                    <button type="button" className="list-inline-item btn btn-sm text-danger" onClick={()=>this.deleteUser(user.id)}>
                                                        <i className="fa fa-trash" ></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        )
    }
}