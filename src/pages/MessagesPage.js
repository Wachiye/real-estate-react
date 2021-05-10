import React, {Component} from "react";
import * as $ from "jquery";
import queryParams from "../utils/queryParams";
import MessageService from "../services/MessageService";
export default class  MessagesPage extends Component{
    constructor(props){
        super(props);

        this.state = {
            messages: [],
            response:null,

            message_id: '',
            to_email: '',
            from_email:'',
            message:''
        }

        this.getAllMessages = this.getAllMessages.bind(this);
        this.getOneById = this.getOneById.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
        //this.replyMessage = this.replyMessage.bind(this);
    }

    async getAllMessages(){
        let messages = await MessageService.getAll();
        this.setState({
            messages: messages
        });
    }
    async getOneById(){
        let id = queryParams("id");
        let messages = await MessageService.getOneById(id);
        this.setState({
            messages: messages
        });
    }
    async markAsRead(message_id){
        let response = await MessageService.markAsRead(message_id);
        this.setState({
            response: response,
        });
        //perform jquery to change the font weight
        if(response.success){
            $(`#message-${message_id}`).removeClass('font-weight-bold').addClass('font-weight-light');
        }
    }
    async deleteMessage(message_id){
        let response = await MessageService.delete(message_id);
        this.setState({
            response: response,
        });
        if(response.success){
            this.setState({
                messages: this.state.messages.filter( m => m.id !== message_id)
            });
        }
    }
    render(){
        let {messages} = this.state;
        return(
            <div className="main-content">
                <div className="title">
                    <h3 className="text-primary">Messages</h3>
                </div>
                
                <div className="messages">
                    {messages && messages.map((item, index) => {
                        return(
                            <Message message={item} key={index} />
                        );
                    })}
                </div>
                <div className="cta paging">

                </div>
            </div>
        );
    }
}

const Message = ({message}) => {
    return(
        <div className="message" id={`message-${message.id}`}>
            <div className="image">
                <img src={message.image || ''} alt="" className="rounded-circle p-2" width="64"
                        height="64" />
            </div>
            <div className="message-body">
                <h3 className="text-primary d-inline">{message.username || ''}</h3>
                <small className="text-muted d-inline-block"> {message.date || ''}</small>
                <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                        <i className="fa fa-envelope text-muted"></i>
                        <a href={`mailto:${message.email || '' }`}>{message.email || '' }</a>
                    </li>
                    <li className="list-inline-item">
                        <i className="fa fa-phone text-muted"></i>
                        <a href={`tel:${message.phone || '' }`}>{message.phone || '' }</a>
                    </li>
                </ul>
                <p className={message.read ? 'font-weight-light' : 'font-weight-bold'}> {message.message || '' }</p>
                <div className="action-list d-inline-flex justify-content-between align-items-center">
                    <input type="checkbox" name="select-all" id="select-all-1" />
                    <button className="btn btn-sm mx-2">
                        <i className="fa fa-reply text-primary"></i>
                    </button>
                    <button type="button" className="btn btn-sm">
                        <i className="fa fa-trash text-danger" onClick={this.deleteMessage}></i>
                    </button>
                </div>
            </div>
        </div>
    );
}