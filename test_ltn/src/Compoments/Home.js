import React from 'react';
import NavBar from "./NavBar";
import Profile from "./Profile";


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Profile/>
            </div>
        );
    }
}