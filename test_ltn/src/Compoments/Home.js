import React from 'react';
import NavBar from "./NavBar";
import Profile from "./Profile";
import Presentation from "./Presentation";
import Repertoire from "./Repertoire";


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Profile/>
                <Presentation/>
                <Repertoire/>
            </div>
        );
    }
}