const ContactList = () =>{
    return (
        <div className="container">
            <ul className="list-inline text-center">
                <li className="list-inline-item">
                    <i className="fa fa-phone mr-1"></i>
                    <a href="tel:">0712312312</a> 
                </li>
                <li className="list-inline-item">
                    <i className="fa fa-envelope mr-1"></i>
                    <a href="mailto:">email@domain.com</a>
                </li>
            </ul>
        </div>
    );
}

export default ContactList;