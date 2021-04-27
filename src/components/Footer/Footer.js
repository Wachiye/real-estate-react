const Footer = () => {
    return(
        <footer>
            {/*footer*/}
            <div className="container footer">
                <div className="row p-2">
                    <div className="col-sm">
                        <p className="lead text-sm-center">
                            Copyright &copy; 2021
                        </p>
                    </div>
                    <div className="col-sm">
                        <div className="list-inline text-sm-right">
                            <div className="list-inline-item ">
                                <a href="#facebook" className="">
                                    <i className="fa fa-2x fa-facebook"></i>
                                </a>
                            </div>
                            <div className="list-inline-item ">
                                <a href="#twitter" className="">
                                    <i className="fa fa-2x fa-twitter"></i>
                                </a>
                            </div>
                            <div className="list-inline-item ">
                                <a href="#google" className="">
                                    <i className="fa fa-2x fa-google-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export  default  Footer;