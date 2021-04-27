import React , {Component} from "react";

export default  class PrivacyPolicyPage extends Component{
    render(){
        return (
            <main>
                <div className="container py-2">
                    <div className="row">
                        <div className="col-12 text-center ">
                            <h1 className="main-title">Privacy Policy</h1>
                            
                        </div>
                    
                    <div className="col-md-8 offset-md-2"> 
                        <article>
                            <h3 className="section-title">Disclaimer</h3>
                            <p className="text">We respect the privacy of our users. This Privacy policy is a legal document that outlines how we collect, use, share and protect your personal information when you visit our website.
                            </p>
                            <p>This document also covers the rights you have on the information you provide and how to safeguard them as a user.</p>
                            <p>
                                Please read this privacy policy carefully. If you do not agree with any part as stated in this privacy policy, please do not access the site.
                            </p>
                        </article>
                        
                            <article id="what-we-collect">
                                <h3 className="section-title">What we Collect</h3>
                                <p className="text">
                                    Personal Information such as your name, email address, location, phone number and interests may be collected during registration or any website activity such as surveys that directly involve users.
                                </p>
                                <p className="text">
                                    Due to the issues of internet security, your IP Address, location, browser type, cookies, device information, access times, and pages accessed before and after you access this website are collected automatically.
                                </p>
                                <p>In any case, you are under no obligation to provide your personal information. However, failure to provide the information may limit the services offered or your access to some parts of the web site.</p>
                            </article>
                            <article id="why-we-collect">
                                <h3 className="section-title">Why we Collect your Information</h3>
                                <p className="text">
                                    These are the reasons why we collect your information
                                </p>
                                <ul className="list-unstyled">
                                    <li>To send marketing materials or newsletters</li>
                                    <li>To process books and transactions</li>
                                    <li>To create and maintain user accounts</li>
                                    <li>To prevent fraudulent activities</li>
                                    <li>To carry out market analysis for improvement of our services and user experience</li>
                                </ul>
                                <p>There will be no any other use of user's information unless changes are made to the website and this privacy policy</p>
                            </article>
                            
                            <article id="how-we-share">
                                <h3 className="section-title">How We Share your Information</h3>
                                <p className="text">
                                    We may share your information with third party service providers in certain situations such payment processing and data analysis and email delivery.
                                </p>
                                <p className="text">
                                    With or without your consent, we may share your information as permitted or required by any applicable law, rule or regulation. This may happen due to suspected fraudulent activities associated to any user account for the purpose of fraud protection.
                                </p>
                                <p className="text">
                                    Your information will be visible to all visitors to this site upon commenting or writing of reviews or any other relevant contribution.
                                </p>
                            </article>
                            <article id="what-you-can-do">
                                <h3 className="section-title">What You Can do with Your Information</h3>
                                <p className="text">
                                    Upon registration or subscription to thi site, you may at any time terminate or modify your information   in your account by logging into your account and and updating yor account or deleting your account or unsubscribing to the user email list.
                                </p>
                                <p>Upon request to terminate your account, we might deny you the request as stated in our <a href="/terms-and-conditions" target="_blank"> Terms and Conditions</a>.</p>
                            </article>
                            <article id="updates">
                                <h3 className="section-title">Updates to our Website and Privacy Policy</h3>
                                <p className="text">
                                We reserve the right to make changes to this privacy policy at any time and for any reason. In case of any changes, we will alert you and the changes will take effect immediately upon publishing the updated Privacy Policy on the website.
                                Upon visitation to the website after an update, you will be deemed to be aware, adhering and subject to the changes made.
                                </p>
                                <p>
                                    You are, therefore , encouraged to periodically review this Privacy Policy to stay informed of the updates.
                                </p>
                            </article>
                            <article id="our-contacts">
                                <h3 className="section-title">Our Contacts</h3>
                                <p className="text">
                                    If you have questions or comments about this Privacy Policy, please get in touch directly via:
                                    
                                </p>
                                <ul className="list-unstyled">
                                    <li>Email: <a href="mailto:#">email here</a></li>
                                    <li>Phone: <a href="tel:#">2547-xxx-xxxxx</a></li>
                                    <li>Address: P.O. BOX 536, Egerton, Kenya</li>
                                </ul>
                                or use our contact page.
                                <a href="/contact" className="btn btn-sm btn-link">Go to Contact Page</a>
                            </article>
                    </div>
                        
                        <div className="col-8 offset-2 text-center mb-2">
                            <a href="/terms-and-conditions" className="btn-link btn-warning">Terms and Conditions</a>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}