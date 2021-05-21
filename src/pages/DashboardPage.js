import React, {Component} from "react";
export default class DashboardPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            recent_deposits:[],
            users:0,
            properties:0,
            unbooked_properties:0,
            unread_messages:0,
            deposit_amount:0,
        }
    }

    render() {
        let {deposits} = this.state;
        return(
            <div className="dashboard">

                <div className="greeting">
                    <img src="" alt="" />
                        <div className="greeting-body">
                            <h3 className="text-primary">User Account One</h3>
                            <p className="text-info">Hello User, Welcome to your admin dashboard.</p>
                        </div>
                </div>

                <div className="updates">

                    <a className="update" href="./properties">
                        <i className="icon fa fa-2x fa-database"></i>
                        <h5 className="title no-u">Properties</h5>
                        <p className="message">{this.state.properties}</p>
                    </a>
                    <a className="update " href="./users">
                        <i className="icon fa fa-2x fa-group"></i>
                        <h5 className="title no-u">Users</h5>
                        <p className="message">{this.state.users}</p>
                    </a>
                    <a className="update" href="./properties?booked=false">
                        <i className="icon fa fa-2x fa-database"></i>
                        <h5 className="title no-u">Unbooked</h5>
                        <p className="message">{this.state.unbooked_properties}</p>
                    </a>
                    <a className="update" href="./deposits">
                        <i className="icon fa fa-2x fa-bank"></i>
                        <h5 className="title no-u">All time Deposits</h5>
                        <p className="message">{this.state.deposit_amount}</p>
                    </a>
                </div>

                <div className="card bg-transparent main-card">
                    <div className="card-header bg-transparent d-flex justify-content-between">
                        <h4 className="text-primary">Monthly Desposit Analysis</h4>
                        <i className="fa fa-2x fa-line-chart"></i>
                    </div>
                    <div className="card-body">
                        <canvas id="monthly-analysis"></canvas>
                    </div>
                </div>

                <div className="card  bg-transparent minor-card">
                    <div className="card-header bg-transparent d-flex justify-content-between">
                        <h4 className="text-primary">Property Booking Analysis</h4>
                        <i className="fa fa-2x fa-pie-chart"></i>
                    </div>
                    <div className="card-body">
                        <canvas id="booking-analysis"></canvas>
                    </div>
                </div>

                <div className="card bottom-card">
                <div className="card-body ">
                        <table className="table table-bordered table-responsive-lg bg-light">
                            <thead>
                                <tr>
                                    <th>
                                        <input type="checkbox" name="select-all" id="select-all" />
                                    </th>
                                    <th>
                                        First Name
                                    </th>
                                    <th>Last Name</th>
                                    <th>Phone No</th>
                                    <th>Email</th>
                                    <th>Amount(Ksh)</th>
                                    <th>Property</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="deposits">
                                {deposits && deposits.map( (item, index) => {
                                    return(
                                        <DepositRow deposit={item} key={index} />
                                    );
                                }) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const DepositRow = ({deposit}) =>{
    return(
        <tr className="deposit">
            <td className="select-col">
                <input type="checkbox" name="select-all" id={`select-all-${deposit.id}`} data-select-value={deposit.id} />
            </td>
            <td className="fname-col">{deposit.first_name}</td>
            <td className="lname-col">{deposit.last_name}</td>
            <td className="phone-col">{deposit.phone}</td>
            <td className="email-col">{deposit.email || ''}</td>
            <td className="amount-col">{deposit.amount}</td>
            <td className="prop-col">{deposit.property_id}</td>
            <td className="date-col">{deposit.date}</td>
            <td className="text-center action-col">
                <div className="list-inline">
                    <a className="list-inline-item btn btn-sm btn-outline-primary" href={`/properties/${deposit.id}`} target="_open">View
                    </a>
                </div>
            </td>
        </tr>
    );
}