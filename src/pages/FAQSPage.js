import React , {Component} from "react";

export default  class FAQSPage extends Component{
    render(){
        return (
            <main>
                <div className="container py-2">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="main-title">Frequently Asked Questions</h1>
                            <div className="w-50 m-auto">
                                <input type="search" className="form-control my-1" placeholder="Search ..." />
                            </div>
                        </div>
                        
                        <div className="col-md-12 "> 
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item bg-transparent">
                                        <p className="question text-primary" data-show-id="answer-1">Question 1
                                            <span className="pull-right fa fa-plus-circle show-answer-btn" data-show-id="answer-1"></span>
                                        </p>
                                        <p className="answer d-none" id="answer-1">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas odit architecto reiciendis placeat. Fugit qui provident saepe molestias ab illum eveniet blanditiis ex. Commodi esse odio quia illum consequuntur.
                                        </p>
                                    </li>
                                    <li className="list-group-item bg-transparent">
                                        <p className="question text-primary" data-show-id="answer-2">Question 2 is now longer that question 1
                                            <span className="pull-right fa fa-plus-circle show-answer-btn" data-show-id="answer-2"></span>
                                        </p>
                                        <p className="answer d-none" id="answer-2">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas odit architecto reiciendis placeat. Fugit qui provident saepe molestias ab illum eveniet blanditiis ex. Commodi esse odio quia illum consequuntur.
                                        </p>
                                    </li>
                                    <li className="list-group-item bg-transparent">
                                        <p className="question text-primary" data-show-id="answer-3">Question 3 that could be longer that all the questions
                                            <span className="pull-right fa fa-plus-circle show-answer-btn" data-show-id="answer-3"></span>
                                        </p>
                                        <p className="answer d-none" id="answer-3">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas odit architecto reiciendis placeat. Fugit qui provident saepe molestias ab illum eveniet blanditiis ex. Commodi esse odio quia illum consequuntur.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="col-8 offset-2 text-center mb-2">
                                <button className="btn btn-sm btn-outline-warning" data-toggle="modal" data-target="#question-div">Could not find an answer?</button>
                                <div className="modal show" id="question-div">
                                    <div className="modal-dialog modal-dialog-centered" role="dialog">
                                        <div className="modal-content" role="document">
                                            <div className="modal-header">
                                                <h6>Ask us and we shall get in touch as soon as possible</h6>
                                                <button className="close" data-dismiss="modal">
                                                    &times;
                                                </button>
                                            </div>
                                            <div className="modal-body text-left">
                                                <form action="" id="comment-form" name="comment-form">
                                                    <div className="form-group">
                                                        <label for="full_name">Full Name</label>
                                                        <input type="text" name="full_name" id="full_name" className="form-control"
                                                            placeholder="Full Name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="email">Email</label>
                                                        <input type="email" name="email" id="email" className="form-control"
                                                            placeholder="Email Address" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="question">Your Question</label>
                                                        <input type="text" name="question" id="question" className="form-control"
                                                            placeholder="Write your question here" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="message">Extra information</label>
                                                        <textarea name="message" id="message" className="form-control" placeholder="Your Message"
                                                            rows="5"></textarea>
                                                    </div>
                                                    
                                                    <input type="submit" className="btn btn-dark" value="Send Question" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </main>
        );
    }
}