import React , {Component} from 'react';
import queryParams from "../utils/queryParams";
import SubscriptionService from "../services/SubscriptionService";
import UserService from '../services/UserService';

export default  class SubscriptionsPages extends Component{
    constructor(props) {
        super(props);

        this.state = {
            agents: false,
            agent: true,
            agent_data:{},
            subscriptions:[],
            response:null,

            agent_id:'',
            phone:'',
            mpesa_code:''
        }

        this.getOneById = this.getOneById.bind(this);
        this.getAllSubscriptions = this.getAllSubscriptions.bind(this);
        this.getAllByAgentId = this.getAllByAgentId.bind(this);
        this.subscribe = this.subscribe.bind(this);

        this.onChangeAgentId = this.onChangeAgentId.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeMpesaCode = this.onChangeMpesaCode.bind(this);

    }
    onChangePhone(e){
        this.setState({
            phone:e.target.value
        });
    }
    onChangeMpesaCode(e){
        this.setState({
            mpesa_code:e.target.value
        });
    }
    onChangeAgentId(e){
        this.setState({
            agent_id:e.target.value
        });
    }

    async getOneById(){
       let id = queryParams("id");
       let subscriptions = await SubscriptionService.getOneById(id);
       this.setState({
           agent: queryParams("agent") ? true : false,
           agents:queryParams("agent") ? false : true,
           subscriptions:subscriptions
       });
    }
    async getAllSubscriptions(){
        let subscriptions = await SubscriptionService.getAll();
        this.setState({
            agents:true,
            agent:false,
            subscriptions:subscriptions
        });
    }
    async getAllByAgentId(){
        let agent_id = queryParams("agent");
        let agent_data = await UserService.getOneById(agent_id);
        let subscriptions = await SubscriptionService.getAllByAgentId(agent_id);
        this.setState({
            agent: true,
            agents:false,
            agent_data : agent_data || {},
            subscriptions:subscriptions
        });
    }
    async subscribe(){
        let {agent_id, phone, mpesa_code} = this.state;
        let data = {
            "agent_id": agent_id,
            "phone" : phone,
            "mpesa_code" : mpesa_code
        }
        let response = await SubscriptionService.subscribe(data);
        this.setState({
            response: response
        });
    }
    render() {
        let {agent_id, agent, agent_data, subscriptions, agents} = this.state;
        return(
            <div className="main-content">
                <div>
                    <h3 className="title text-primary d-inline-block">Subscription</h3>
                    <div className="d-inline">
                        <button className="btn btn-success btn-sm pull-right" data-toggle="modal"
                                data-target="#subscription">
                            Subscribe
                        </button>
                        <div className="modal show position-absolute" id="subscription">
                            <div className="modal-dialog" role="dialog">
                                <div className="modal-content" role="document">
                                    <div className="modal-body">
                                        <div className="card bg-transparent border-0">
                                            <div className="card-body">
                                                <h3 className="card-title">
                                                    Confirm M-Pesa Transaction
                                                </h3>
                                                <p className="text-muted">Use the phone number you used to make
                                                    payment</p>
                                                <form name="subscription-form" id="subscription-form">
                                                    <input type="text" className="form-control mb-3"
                                                        name="agent_id" id="agent_id"
                                                        placeholder="Agent ID" defaultValue={agent_id || '' }
                                                        onChange={this.onChangeAgentId}/>
                                                    <input type="text" className="form-control mb-3"
                                                        name="subscription_phone" id="subscription_phone"
                                                        placeholder="Phone Number" defaultValue={agent_data.phone || '' }
                                                        onChange={this.onChangePhone}/>
                                                    <input type="text" className="form-control mb-3"
                                                        name="subscription_code" id="subscription_code"
                                                        placeholder="M-Pesa Code" onChange={this.onChangeMpesaCode}/>
                                                    <div className="form-group">
                                                        <button type="button" className="btn btn-dark text-light btn-sm text-uppercase" 
                                                        onClick={this.subscribe}>Subscribe Now
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {agent && <AgentInfoText />}
                <div className="subscription-history">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-primary">Subscription History</h3>
                            {
                                agents && <AgentsSubscriptionTable subscriptions={subscriptions} />
                            }
                            {
                                agent && <AgentSubscriptionTable subscriptions={subscriptions} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const AgentInfoText = () =>{
    return(
        <div className="info mb-2">
            <div className="p-2 rounded shadow bg-light">
                <p className="text-info">
                    Your subscription plan is
                    <span className="subscription-plan-status font-weight-bold mx-1">Active</span>
                    but will expire on
                    <span className="subscription-date font-weight-bold mx-1">29 February 2021</span>.
                    Days left <span className="subscription-days font-weight-bold mx-1">29</span>
                </p>
                <p className="text-dark-50">
                    <strong>NOTE:</strong>
                    If your subscription plan expires, your property wil not be listed until the next renewal
                </p>
            </div>
        </div>
    );
}

const AgentsSubscriptionTable = ({ subscriptions}) => {
    return(
        <table className="table table-bordered table-sm" aria-sort="ascending">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Month</th>
                    <th>Agent Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Code</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
            {subscriptions && subscriptions.map( (item , index) => {
                return(
                    <tr>
                        <td>{item.year}</td>
                        <td>{item.month}</td>
                        <td>{item.agent_name}</td>
                        <td>{item.date}</td>
                        <td>{item.amount}</td>
                        <td>{item.code}</td>
                        <td>{item.active}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}
const AgentSubscriptionTable = ({ subscriptions}) => {
    return(
        <table className="table table-bordered table-sm" aria-sort="ascending">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Month</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Code</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
            {subscriptions && subscriptions.map( (item , index) => {
                return(
                    <tr>
                        <td>{item.year}</td>
                        <td>{item.month}</td>
                        <td>{item.date}</td>
                        <td>{item.amount}</td>
                        <td>{item.code}</td>
                        <td>{item.active}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}