import React, {Component} from "react";
import DepositService from "../services/DepositService";
export default class  DepositsPage extends Component {
    constructor(props){
        super(props);
        this.state={
            deposits:[]
        }

        this.getAllDeposits = this.getAllDeposits.bind(this);
    }
    componentDidMount(){
       this.getAllDeposits();
    }

    async getAllDeposits(){
        let deposits = await DepositService.getAll();
        this.setState({
            deposits : deposits
        });
    }
    render() {
        let {deposits} = this.state;
        return (
            <div className="main-content">
                <div className="title">
                    <h3 className="text-primary">Deposits</h3>
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
                                {deposits && deposits.map( (item, index) => {
                                    return(
                                        <DepositRow deposit={item} key={index} />
                                    );
                                }) }
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