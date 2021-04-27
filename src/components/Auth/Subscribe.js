import React from "react";

const Subscribe = ({height}) => {
    return (
        <div className={`card ${(height && 'h-100') || ''} bg-transparent border-secondary mt-2 w-100`}>
            <div className="card-body">
                <h4 className="card-title text-muted">Receive lates uploads and news ahead of others
                    right in
                    your inbox
                </h4>
                <form action="#" name="subscribe-form" id="subscribe-form">
                    <div className="form-row">
                        <div className="col-lg-4 mb-1">
                            <input type="text" className="form-control" name="username"
                                   id="username"
                                   placeholder="Username" />
                        </div>
                        <div className="col-lg-4 mb-1">
                            <input type="email" className="form-control" name="email" id="email"
                                   placeholder="Email Address" />
                        </div>
                        <div className="col">
                            <input type="submit" value="Subscribe" className="btn btn-dark" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Subscribe;