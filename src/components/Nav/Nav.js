const  Nav = () =>{
    return (
        <nav className="navbar navbar-expand-sm bg-warning navbar-light">
            <div className="container">
                <a className="navbar-brand d-sm-none" href="/">Logo</a>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="./properties.html" id="navbardrop"
                               data-toggle="dropdown">
                                Properties
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/properties?type=single_room">Single Room</a>
                                <a className="dropdown-item" href="/properties?type=single_room">Bed Sitter</a>
                                <a className="dropdown-item" href="/properties?type=single_room">Other</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>

                    </ul>
                    <ul className="navbar-nav ml-md-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#search">
                                <i className="fa fa-2x fa-search"></i>
                            </a>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    );
}

export  default  Nav;