const  Nav = () =>{
    return (
        <nav className="navbar navbar-expand-md">
            <div className="container">
                <a className="navbar-brand" href="/">HouseTab</a>
                <button className="navbar-toggler nav-btn " type="button" data-toggle="collapse" data-target="#navbar">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav mr-auto">
                        
                    </ul>
                    <ul className="navbar-nav ml-md-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link"  href="/properties" >Properties</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link search-toggle-btn " href="#search" title="Search" >
                                <i className="fa  fa-search"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login" title="Login/Signup" >
                                Login
                            </a>
                        </li>
                    </ul>

                </div>

            </div>
        </nav>
    );
}

export  default  Nav;