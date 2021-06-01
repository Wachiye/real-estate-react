import React  , {Component} from "react";

import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import ContactList from "./ContactList";
export default class Header extends Component{
    
    render(){
        return (
            <header>
                <div className="container p-0">
                    <ContactList />
                    <Nav />
                    <Search />
                </div>
            </header>
        );

    }
}

