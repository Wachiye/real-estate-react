import React , {Component} from "react";

export default  class TestimonialsPage extends Component{
    render(){
        return (
            <main>
                <div className="container py-2">
                    <div className="row">
                        <div className="col-12 text-center ">
                            <h1 className="main-title">Testimonials</h1>
                            <p>What people say about us</p>
                        </div>
                        
                    
                    <div className="col-md-12 "> 
                        <div className="testimonials">
                            <div className="testimonial">
                                <h4 className="name">User ZYX</h4>
                                
                                <blockquote className="blockquote">
                                    <i className="fa fa-quote-left"></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eligendi, ullam pariatur quaerat minus vero sapiente sunt soluta eaque fugiat expedita. Accusantium, qui! Facilis qui blanditiis dolores commodi laboriosam quis!
                                    <i className="fa fa-quote-right"></i>
                                    <ul className="blockquote-footer list-inline">
                                        <li className="list-inline-item">
                                            <a href="mailto:#">email here</a>
                                        </li>
                                    </ul>
                                </blockquote>
                                <img src="./images/member-1.jpg" alt="" className="rounded-circle img-thumbnail" />
                            </div>
                            <div className="testimonial">
                                <h4 className="name">User ZYX</h4>
                                
                                <blockquote className="blockquote">
                                    <i className="fa fa-quote-left"></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eligendi, ullam pariatur quaerat minus vero sapiente sunt soluta eaque fugiat expedita. Accusantium, qui! Facilis qui blanditiis dolores commodi laboriosam quis!
                                    <i className="fa fa-quote-right"></i>
                                    <ul className="blockquote-footer list-inline">
                                        <li className="list-inline-item">
                                            <a href="mailto:#">email here</a>
                                        </li>
                                    </ul>
                                </blockquote>
        
                                <img src="./images/member-1.jpg" alt="" className="rounded-circle img-thumbnail" />
                            </div>
                            <div className="testimonial">
                                <h4 className="name">User ZYX</h4>
                                
                                <blockquote className="blockquote">
                                    <i className="fa fa-quote-left"></i>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eligendi, ullam pariatur quaerat minus vero sapiente sunt soluta eaque fugiat expedita. Accusantium, qui! Facilis qui blanditiis dolores commodi laboriosam quis!
                                    <i className="fa fa-quote-right"></i>
                                    <ul className="blockquote-footer list-inline">
                                        <li className="list-inline-item">
                                            <a href="mailto:#">email here</a>
                                        </li>
                                    </ul>
                                </blockquote>
                                <img src="./images/member-1.jpg" alt="" className="rounded-circle img-thumbnail" />
                            </div>
                        </div>
                        </div>
                    
                        <div className="col-8 offset-2 text-center mb-2">
                            <button className="btn btn-sm btn-outline-warning" data-toggle="modal" data-target="#comment">Comment and Get Featured</button>
                            <div className="modal show" id="comment">
                                <div className="modal-dialog modal-dialog-centered" role="dialog">
                                    <div className="modal-content" role="document">
                                        <div className="modal-header">
                                            <h4>Comment and Get Featured</h4>
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
                                                    <label for="message">Message</label>
                                                    <textarea name="message" id="message" className="form-control" placeholder="Your Message"
                                                        rows="5"></textarea>
                                                </div>
                                                <input type="file" className="form-control form-control-sm my-2" accept="image/*" />
                                                <input type="submit" className="btn btn-dark" value="Testify" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}