import AuthService from "../../services/AuthService";

const AdminHeader = () =>{
    const logout = async () =>{
        let res = await AuthService.logout();
        if(res.logout){
            window.location = "/";
        }
    }
    return(
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 pt-3 pt-lg-none d-lg-none">
                        <button className="btn btn-sm btn-light show-nav-btn fa fa-2x fa-bars"
                                data-nav-class="navigation">

                        </button>
                    </div>
                    <div className="col d-none d-lg-block pt-3">
                        <h2>Residential Real Estate</h2>
                    </div>
                    <div className="col text-right">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <img src="../images/member-1.jpg" className="rounded-circle" alt="" width="64"
                                     height="64" />
                            </li>
                            <li className="list-inline-item">
                                <button className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">
                                    Actions
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/admin/account#details">Edit Account</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/logout" onClick={()=>logout}>Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHeader;