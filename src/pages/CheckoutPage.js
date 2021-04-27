import React , {Component} from "react";
import Subscribe from "../components/Auth/Subscribe";

export default  class CheckoutPage extends Component{
    render(){
        return (
            <main>
                <div className="container py-2">
                    <div className="row mb-2">
                        <div className="col-sm-8 offset-sm-2">
                            <h1 className="text-center main-title">Checkout</h1>
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-md-8 mb-2">

                            <div className="card bg-transparent border-success mb-1">
                                <h3
                                    className="card-header text-center bg-success text-capitalize text-light"
                                >
                                    Confirm Your Choices
                                </h3>
                                <div className="card-body">
                                    <table className="table table-responsive-lg table-bordered">
                                        <thead>
                                        <tr>
                                            <th>Property</th>
                                            <th>Capacity</th>
                                            <th>Location</th>
                                            <th>Deposit</th>
                                            <th>Slots</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {/*loop starts*/}
                                            <tr>
                                                <td>Property 1</td>
                                                <td>Single Room</td>
                                                <td>Gate</td>
                                                <td>500</td>
                                                <td>1</td>
                                                <td>
                                                    <ul className="list-inline">
                                                        <a
                                                            href="/properties/id"
                                                            className="list-inline-item btn btn-link btn-sm"
                                                        >
                                                            View
                                                        </a>
                                                        <a
                                                            href="/properties/id?action=book"
                                                            className="list-inline-item btn btn-link btn-sm"
                                                        >
                                                            Confirm
                                                        </a>
                                                    </ul>
                                                </td>
                                            </tr>
                                        {/*    loop ends*/}

                                        <tr>
                                            <th colSpan="3" className="text-right">Total Deposit</th>
                                            <td colSpan="3">Ksh <span className="amount">1500</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card bg-transparent border-info mb-1">
                                <h3
                                    className="card-header text-center bg-info text-capitalize text-light"
                                >
                                    Confirm Your Details
                                </h3>
                                <div className="card-body">
                                    <form action="" name="client-form" id="client-form">
                                        <div className="form-group">
                                            <label htmlFor="first_name">First Name</label>
                                            <input
                                                type="text"
                                                id="first_name"
                                                name="first_name"
                                                className="form-control form-control-sm"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="last_name">Last Name</label>
                                            <input
                                                type="text"
                                                id="last_name"
                                                name="last_name"
                                                className="form-control form-control-sm"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control form-control-sm"
                                                placeholder="Email Address "
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                className="form-control form-control-sm"
                                                placeholder="Phone  Number"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card bg-transparent border-info mb-1">
                                <h3
                                    className="card-header text-center bg-info text-capitalize text-light"
                                >
                                    Deposit For Booking
                                </h3>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-1">
                                            <form action="" name="deposit-form" id="deposit-form">
                                                <div className="form-group">
                                                    <label htmlFor="deposit_phone">Phone</label>
                                                    <input
                                                        type="tel"
                                                        id="deposit_phone"
                                                        name="deposit_phone"
                                                        className="form-control form-control-sm"
                                                        placeholder="Phone  Number to pay with"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="transaction_id">Transaction ID</label>
                                                    <input
                                                        type="text"
                                                        id="transaction_id"
                                                        name="transaction_id"
                                                        className="form-control form-control-sm"
                                                        placeholder="Transaction ID"
                                                        disabled
                                                    />
                                                </div>
                                                <button
                                                    className="btn btn-warning btn-sm deposit-btn"
                                                    id="deposist-btn"
                                                >
                                                    Make Deposit
                                                </button>
                                                <button
                                                    className="btn btn-sm checkout-btn disabled"
                                                    id="checkout-btn"
                                                    disabled
                                                >
                                                    Complete Checkout
                                                </button>
                                            </form>
                                        </div>
                                        <div className="col-md-6 mb-1 details">
                                            <p className="lead">
                                                Pay deposit of Ksh <span className="amount">1500</span> to
                                                MpesaTill Number
                                                <span className="pay-bill-no">137415</span>
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Commodi reiciendis laudantium omnis repellat beatae
                                                blanditiis magnam dignissimos maiores sit tempore!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card bg-transparent border-info">
                                <h3 className="text-center bg-transparent text-capitalize text-info">
                                    How To pay(manually)
                                </h3>
                                <div className="card-body">
                                    <p className="card-text">
                                        On the M-PESA Menu Go to "Lipa Na M-PESA Select Buy Goods
                                        <br/>
                                        Enter the Till Number of the outlet/or sales person you wish
                                        to pay <br/>
                                        Enter the amount you wish to pay (between KSHs.50 –
                                        KSHs.70,000) <br/>
                                        Enter your M-PESA PIN. <br/>
                                        Confirm that all details are correct and press OK <br/>
                                        You will receive a confirmation SMS from M-PESA immediately.
                                    </p>
                                </div>
                            </div>
                            <Subscribe height={false}/>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}