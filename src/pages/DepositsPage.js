import React, {Component} from "react";

export default class  DepositsPage extends Component {
    render() {
        return (
            <div className="main-content">
                <div className="title">
                    <h3 className="text-primary">Deposits</h3>
                </div>
                <div className="search">
                    <div className="search-form">
                        <input type="search" className="input" name="search" id="search" />
                            <button className="btn btn-sm btn-dark text-light fa  fa-2x fa-search">Search</button>
                    </div>
                </div>
                <div className="card bg-transparent border-0">
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
                            <tr className="deposit">
                                <td className="select-col">
                                    <input type="checkbox" name="select-all" id="select-all-1" data-select-value="1" />
                                </td>
                                <td className="fname-col">
                                    User 1
                                </td>
                                <td className="lname-col">
                                    User 1
                                </td>
                                <td className="phone-col">2547-123-12344</td>
                                <td className="email-col">email@example.com</td>
                                <td className="amount-col">500</td>
                                <td className="prop-col">PSR-2367</td>
                                <td className="date-col">2021-03-08</td>
                                <td className="text-center action-col">
                                    <div className="list-inline">
                                        <button className="list-inline-item btn btn-sm btn-outline-primary">View
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="cta paging">

                </div>
            </div>
        );
    }
}