import React  , {Component} from "react";

import Nav from "../Nav/Nav";
import Search from "../Search/Search";
export default class Header extends Component{
    
    render(){
        return (
            <header>
                <div className="container p-0">
                    <Nav />
                    <Search />
                </div>
            </header>
        );

    }
}

