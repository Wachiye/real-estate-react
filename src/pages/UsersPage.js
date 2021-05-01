import React, {Component} from "react";
import queryParams from "../utils/queryParams";
import UserService from "../services/UserService";

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
    async getAllUsers(){
        let users = await UserService.getAll();
        this.setState({
            users: users
        });
    }
    async getOneById(){
        let id = queryParams("id");
        let users = await UserService.getOneById(id);
        this.setState({
            users: users
        });
    }
    async deleteUser(user_id){
        // let response = await UserService.delete(user_id);
        // this.setState({
        //     response: response,
        // });
        // if(response.success){
            this.setState({
                users: this.state.users.filter( u => u.id !== user_id)
            });
        // }
    }
    render(){
        let {users} = this.state;

        return(
            <div class="main-content">
                <div class="title no-u">
                    <h3 class="text-primary d-inline-block">Users</h3>
                    <div className="pull-right">
                        <a href="/admin/users?action=add" class="btn btn-sm deco-none btn-success mr-1">New</a>
                        <a href="#broadcast" class="btn btn-sm deco-none btn-primary " data-toggle="modal" data-target="#broadcast">Broadcast</a>
                        <div class="modal show" id="broadcast">
                            <div class="modal-dialog modal-dialog-centered" role="dialog">
                                <div class="modal-content" role="document">
                                    <div class="modal-header">
                                        <h4>Send Broadcast User to selected </h4>
                                        <button class="close" data-dismiss="modal">
                                            &times;
                                        </button>
                                    </div>
                                    <div class="modal-body text-left">
                                        <form action="" id="comment-form" name="comment-form">
                                            <div class="form-group">
                                                <label for="title">User Title</label>
                                                <input type="text" name="title" id="title" class="form-control"
                                                    placeholder="User Title"/>
                                            </div>
                                            <div class="form-group">
                                                <label for="User">User</label>
                                                <textarea name="User" id="User" class="form-control" placeholder="Your User"
                                                    rows="5"></textarea>
                                            </div>
                                            <button type="button" class="btn btn-dark">Send Broadcast</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-1">
                    <div class="search">
                        <div class="search-form">
                            <input  type="search"  class="input" name="search" id="search" />
                            <button class="btn btn-sm btn-dark text-light fa  fa-2x fa-search">Search</button>
                        </div>
                    </div>
                </div>
                
                <div class="card bg-transparent border-0">
                    <div class="card-body ">
                        <table class="table table-bordered table-striped table-responsive-lg ">
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
                            <tbody class="users">
                                {users && users.map( (item, index) => {
                                    if(item.type === 'subscriber'){
                                        return( <Subscriber user={item} key={index} deleteFunction={()=>this.deleteUser(item.id)} />);
                                    }else{
                                        return( <Agent user={item} key={index} deleteFunction={()=>this.deleteUser(item.id)} />);
                                    }
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="cta paging">

                </div>
            </div>
        )
    }
}

const Subscriber = ({user, deleteFunction}) =>{
    return(
        <tr class="subscriber">
            <td class="select-col">
                <input type="checkbox" className="select" name="select" id={`select-${user.id}`} data-select-value={user.id} />
            </td>
            <td class="img-col">N/A</td>
            <td class="name-col">{user.name ||''}</td>
            <td class="email-col">{user.email ||''}</td>
            <td class="phone-col">{user.phone || 'N/A'}</td>
            <td className="type-col">{user.type || 'Subscriber' }</td>
            <td class="properties-col">N/A</td>
            <td class="active-col">{user.isActive ? 'Active' : 'Inactive'}</td>
            <td class="date-col">{user.date}</td>
            <td class="text-center action-col">
                <div class="list-inline">
                    <button type="button" class="list-inline-item btn btn-sm text-danger" onClick={deleteFunction}>
                        <i className="fa fa-trash" ></i>
                    </button>
                </div>
            </td>
        </tr>
    );
}
const Agent = ({user, deleteFunction}) =>{
    return(
        <tr class="agent">
            <td class="select-col">
                <input type="checkbox" className="select" name="select" id={`select-${user.id}`} data-select-value={user.id} />
            </td>
            <td class="img-col">
                <img src={user.image} alt=""  width="48" height="48"/>
            </td>
            <td class="name-col">{user.name ||''}</td>
            <td class="email-col">{user.email ||''}</td>
            <td class="phone-col">{user.phone || ''}</td>
            <td className="type-col">{user.type || 'Agent' }</td>
            <td class="properties-col">{user.properties || 0}</td>
            <td class="active-col">{user.isActive ? 'Active' : 'Inactive'}</td>
            <td class="date-col">{user.date}</td>
            <td class="text-center action-col">
                <div class="list-inline">
                    <a href={`/admin/users?action=edit&id=${user.id}`} class="list-inline-item btn btn-sm text-success">
                        <i className="fa fa-edit"></i>
                    </a>
                    <button type="button" class="list-inline-item btn btn-sm text-danger" onClick={deleteFunction}>
                        <i className="fa fa-trash" ></i>
                    </button>
                </div>
            </td>
        </tr>
    );
}