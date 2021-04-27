import React , {Component} from "react";

export default  class TermsConditionsPage extends Component{
    render(){
        return (
            <main>
                <div className="container py-2">
                    <div className="row">
                        <div className="col-12 text-center ">
                            <h1 className="main-title">Terms and Conditions</h1>
                        </div>
                        
                    
                    <div className="col-md-8 offset-md-2"> 
                        <article>
                            <h3 className="section-title">Disclaimer</h3>
                            <p className="text">
                                The information we provide here is our legal binding agreement between you and us concerning access and use of the website content and the services provided.
                            </p>
                            <p className="text">
                                By accessing and using any service or content on this website, you agree that you have read, understood and agree to be bound by our terms and conditions.
                            </p>
                            <p className="text">
                                If you have not read, Please read and understand our terms and conditions. If you do not agree with any part as stated in this Terms and Condition, please do not access the site or discontinue its use immediately.
                            </p>
                            
                        </article>
                        
                            <article id="audience">
                                <h3 className="section-title">Our Audience</h3>
                                <p className="text">
                                    This site is intended for users who are looking for rental accommodation facilities or renting the mentioned facilities.
                                </p>
                                <p>
                                    Our content is, as-is, for general public access within the Egerton Fraternity and is not limited to any age bracket. In the case of access from other regions, please ensure that you access the site as applicable by the laws in your region
                                </p>
                            </article>
                            <article id="our-content">
                                <h3 className="section-title">Our Content</h3>
                                <p className="text">
                                    Unless otherwise stated, this site, the graphics(logo, audio, images, videos and any other graphics), text and the source code remains our intellectual propriety property, owned by us, controlled by us, and protected by the copyright and trademark laws.
                                </p>
                                <p className="text">
                                    The content, provided as-is, is for your information and personal use only.
                                </p>
                                <p className="text">
                                    Any part of the website content, unless permitted or highly authorized, shall not be copied, reproduced, republished, printed, posted, publicly displayed, transmitted or translated, sold or exploited in any way for any commercial purpose.
                                </p>
                                <p className="text">
                                    Despite having an account with us, you are granted a limited access to the site and only restricted to the parts you are allowed. Breach to this will lead to account termination and proper action shall be taken for compensation as required.
                                </p>
                            </article>
                            
                            <article id="your-information">
                                <h3 className="section-title">Your Information</h3>
                                <p className="text">
                                    By using this site, you agree and warrant that:
                                </p>
                                <ol type="a" style={{listStylePosition: "inside"}}>
                                    <li>
                                        You have read, understood and agree to this Terms and Conditions
                                    </li>
                                    <li>The information you provide during registration or surveys is true, accurate, updated and complete</li>
                                    <li>
                                        You will keep you password confidential and will be responsible and accountable to any activities connected to your account or password
                                    </li>
                                    <li>
                                        You will not participate in any illegal access or use of our website such as using non-human or automated means for access
                                    </li>
                                    <li>
                                        Your use or registration to this site will not break and rules or regulations
                                    </li>
                                    <li>
                                        You shall not share or participate in any offensive profanity or abusive or hate language to our site or in connection to our site.
                                    </li>
                                    <li>
                                        We retain the right, not the obligation, to : 
                                        <ol className="pl-2" style={{listStylePosition: "inside"}}>
                                            <li>Monitor any strange activity on the site or violations of these terms and conditions</li>
                                            <li>Take appropriate legal action against anyone who violates the law or these terms and conditions and or including reporting such user to the law enforcement authorities without notice</li>
                                            <li>Shutdown the servers or discontinue any access to this site or update or delete any content on this site without limitation</li>
                                        </ol>
                                    </li>
                                </ol>
                                <p className="text">
                                    Provision of any falsy, inaccurate, incomplete, outdated information may lead to a life term suspension or termination of your account or general access and use of the site. 
                                </p>
                            </article>
                            
                            <article id="our-contacts">
                                <h3 className="section-title">Our Contacts</h3>
                                <p className="text">
                                    If you have questions or comments about this Terms and Conditions, please get in touch directly via:
                                    
                                </p>
                                <ul className="list-unstyled">
                                    <li>Email: <a href="mailto:#">email here</a></li>
                                    <li>Phone: <a href="tel:#">2547-xxx-xxxxx</a></li>
                                    <li>Address: P.O. BOX 536, Egerton, Kenya</li>
                                </ul>
                                or use our contact page.
                                <button className="btn btn-sm btn-link">Go to Contact Page</button>
                            </article>
                    </div>
                        
                        <div className="col-8 offset-2 text-center mb-2">
                            <a href="./privacy-policy" className="btn btn-warning">Our Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </main>
                
        );
    }
}