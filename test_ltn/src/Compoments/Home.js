import React from 'react';
import NavBar from "./NavBar";
import Profile from "./Profile";
import Presentation from "./Presentation";
import Repertoire from "./Repertoire";
import Services from "./Services";
import Cagnotte from "./Cagnotte";
import Avis from "./Avis"


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Profile/>
                <Presentation/>
                <Repertoire/>
                <Services/>
                <Cagnotte/>
                <Avis/>
            </div>
        );
    }
}