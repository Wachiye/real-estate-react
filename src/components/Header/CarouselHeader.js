import Nav from "../Nav/Nav";
import Search from "../Search/Search";
const CarouselHeader = () => {
    return (
        <header>

            <div className="container p-0">
                <Nav />
                <Search />
                <div id="slider" className="carousel slide" data-ride="carousel">

                    <ul className="carousel-indicators">
                        <li data-target="#slider" data-slide-to="0" className="active"></li>
                        <li data-target="#slider" data-slide-to="1"></li>
                        <li data-target="#slider" data-slide-to="2"></li>
                    </ul>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/house2.jpg" alt="" className="img-fluid w-100"  />
                            <div className="carousel-caption">
                                <h3 className="caption-title">Apartments</h3>
                                <p className="caption-text">Just in time one bedroom</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/house1.jpg" alt="" className="img-fluid w-100" />
                            <div className="carousel-caption">
                                <h3 className="caption-title">Single Family Dwelling</h3>
                                <p className="caption-text">Fair and affordable during holidays</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/bed-sitter-1.jpg" alt="" className="img-fluid w-100" />
                            <div className="carousel-caption">
                                <h3 className="caption-title">Individual/Attached Dwelling</h3>
                                <p className="caption-text">Good for students and single commuters</p>
                            </div>
                        </div>
                    </div>

                    <a className="carousel-control-prev" href="#slider" data-slide="prev">
                        <span className="carousel-control-prev-icon"/>
                    </a>
                    <a className="carousel-control-next" href="#slider" data-slide="next">
                        <span className="carousel-control-next-icon"/>
                    </a>

                </div>
            </div>

        </header>
    );
}

export default CarouselHeader;
