const AdminNav = () => {
    return (
        <div className="navigation">
            <div className="close show-nav-btn fa fa-close position-absolute text-light d-lg-none"
                 data-nav-class="navigation"></div>
            <ul className="list-unstyled">
                <li>
                    <a href="/admin/dashboard">
                        <i className="fa fa-tachometer"></i>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="/admin/properties">
                        <i className="fa fa-database"></i>
                        Properties
                    </a>
                </li>
                <li>
                    <a href="/admin/properties?action=add">
                        <i className="fa fa-plus"></i>
                        New Property
                    </a>
                </li>
                <li>
                    <a href="/admin/deposits">
                        <i className="fa fa-bank"></i>
                        Deposits
                        <span className="pull-right badge-pill badge-success">5</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/messages">
                        <i className="fa fa-comment"></i>
                        Messages
                        <span className="pull-right badge-pill badge-success">4</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/users">
                        <i className="fa fa-users"></i>
                        Users
                    </a>
                </li>
                <li>
                    <a href="/admin/account">
                        <i className="fa fa-user"></i>
                        Account
                    </a>
                </li>
                <hr />
                <li>
                    <a href="/admin/subscription">
                        <i className="fa fa-user-plus"></i>
                        Subscription
                    </a>
                </li>
                <hr />
                <li>
                    <a href="/logout">
                        <i className="fa fa-sign-out"></i>
                        Logout
                    </a>
                </li>
            </ul>
            <div className="follow">
                <h5 className="text-primary text-center">Follow Us</h5>
                <div className="list-inline">
                    <a className="list-inline-item" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <i className="fa fa-2x fa-facebook"></i>
                    </a>
                    <a className="list-inline-item" href="https://www.twiter.com/" target="_blank" rel="noreferrer">
                        <i className="fa fa-2x fa-twitter"></i>
                    </a>
                    <a className="list-inline-item" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <i className="fa fa-2x fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default AdminNav;