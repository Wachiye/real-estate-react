import React, {Component} from "react";

export default class DashboardPage extends Component{
    render() {
        return(
            <div className="dashboard">

                <div className="greeting">
                    <img src="" alt="" />
                        <div className="greeting-body">
                            <h3 className="text-primary">User Account One</h3>
                            <p className="text-info">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perspiciatis modi ad quae,
                                ab
                                dignissimos.
                            </p>
                        </div>
                </div>

                <div className="updates">

                    <div className="update">
                        <i className="icon fa fa-2x fa-database"></i>
                        <h5 className="title no-u">Properties</h5>
                        <p className="message">23</p>
                    </div>
                    <div className="update ">
                        <i className="icon fa fa-2x fa-group"></i>
                        <h5 className="title no-u">Users</h5>
                        <p className="message">23</p>
                    </div>
                    <div className="update">
                        <i className="icon fa fa-2x fa-database-plus"></i>
                        <h5 className="title no-u">Unbooked</h5>
                        <p className="message">8</p>
                    </div>
                    <div className="update">
                        <i className="icon fa fa-2x fa-bank"></i>
                        <h5 className="title no-u">All time Deposits</h5>
                        <p className="message">2300</p>
                    </div>
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
                    boo
                </div>
            </div>
        );
    }
}