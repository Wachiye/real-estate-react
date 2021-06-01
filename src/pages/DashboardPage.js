import React, {Component} from "react";
import {Line, Pie} from "react-chartjs-2";
import DepositService from "../services/DepositService";
import PropertyService from "../services/PropertyService";
import UserService from "../services/UserService";
import formatToCurrency from "../utils/formatCurrency";
import randomColor from "../utils/randomColor";

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
            line_chart_data:{},
            pie_chart_data:{}
        }

        this.getChartData = this.getChartData.bind(this);
        this.setPieChartData = this.setPieChartData.bind(this);
        this.setLineChartData = this.setLineChartData.bind(this);
    }

    async componentDidMount(){
        let users, properties, unbooked = 0,recent_deposits=[];

        users = await UserService.getAll();
        properties = await PropertyService.getAll();
        recent_deposits = await DepositService.getRecent();

        
        
        if(properties.length > 0){
            //calculate the number of unbooked products
            unbooked = properties.filter( p => p.slots === p.stock).length;
        }

        this.setState({
            users: users.length || 0,
            properties: properties.length || 0,
            unbooked_properties: unbooked,
            recent_deposits: recent_deposits
        });

        console.log({recent_deposits});
        await this.getChartData();

    }
    async getChartData(){
        let deposits, amount = 0,chart_labels = [],pie_chart_amounts = [0,0,0,0],
         line_chart_amounts = [];

        deposits = await DepositService.getAll();
        
        if(deposits.length > 0 ){
            
            deposits.forEach( d => {
                //accumulate the amount 
                amount += d.amount
                //check if 
                if(!chart_labels.includes(d.type))
                    chart_labels.push(d.type)
                //get index of the d.type in chart label
                let index = chart_labels.indexOf(d.type);

                //accumulate the amount at this index
                pie_chart_amounts[index] += d.amount;
            });

            //initializing the line_chart_amounts to 0
            for (let i = 0; i < chart_labels.length; i++) {
                line_chart_amounts[i] = [0,0,0,0,0,0,0,0,0,0,0,0];
            }

            deposits.forEach( d => {
                //get month for data
                let date = new Date(d.created_at);
                let month = date.getMonth(); //returns index of month from 0 to 11.
                
                for (let i = 0; i < chart_labels.length; i++) {
                    if(chart_labels[i] === d.type){
                        line_chart_amounts[i][month] += d.amount;
                    }
                }
            });
        }

        this.setState({
            deposit_amount: formatToCurrency(amount),
            pie_chart_data: this.setPieChartData(chart_labels, pie_chart_amounts),
            line_chart_data: this.setLineChartData(chart_labels, line_chart_amounts)
        });
    }

    setPieChartData(labels, data_array){
        return {
            labels: labels,
            datasets: [
                {
                label: 'Category Booking',
                backgroundColor: [
                    randomColor(),
                    randomColor(),
                    randomColor(),
                    randomColor()
                ],
                hoverBackgroundColor: [
                randomColor(),
                randomColor(),
                randomColor(),
                randomColor()
                ],
                data: data_array
                }
            ]
        }
        
    }

    setLineChartData(labels, data_array){
        let datasets = [];

        if(labels.length !== data_array.length){
            throw new Error("Invalid data array");
        }
        else{
            for (let i = 0; i < labels.length; i++) {
                datasets.push({
                    label: labels[i],
                    backgroundColor: randomColor(),
                    borderColor: randomColor(),
                    borderWidth: 2,
                    data: data_array[i]
                });
            }
        }

        return {
            labels: ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul','Aug','Sept', 'Oct', 'Nov','Dec'],
            datasets: datasets
        }
    }
    render() {
        let {recent_deposits, line_chart_data, pie_chart_data} = this.state;
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
                        <h4 className="text-primary">Monthly Deposit Analysis</h4>
                        <i className="fa fa-2x fa-line-chart"></i>
                    </div>
                    <div className="card-body">
                        <Line
                        data={line_chart_data}
                        options={{
                            title:{
                            display:true,
                            text:'Average Rainfall per month',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right'
                            }
                        }}
                        />
                    </div>
                </div>

                <div className="card  bg-transparent minor-card">
                    <div className="card-header bg-transparent d-flex justify-content-between">
                        <h4 className="text-primary">Contribution By Category</h4>
                        <i className="fa fa-2x fa-pie-chart"></i>
                    </div>
                    <div className="card-body">
                        <Pie
                            data={pie_chart_data}
                            height={300}
                            width={300}
                            options={{
                                title:{
                                display:true,
                                text:'Average Rainfall per month',
                                fontSize:20
                                },
                               
                                legend:{
                                display:true,
                                position:'right'
                                },
                                maintainAspectRatio: false
                            }}
                        />
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
                                {recent_deposits && recent_deposits.map( (item, index) => {
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