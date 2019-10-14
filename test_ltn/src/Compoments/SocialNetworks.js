import React from 'react';
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
export default class SocialNetworks extends React.Component {
    render() {
        return (
            <div className={"."}>
                <IconContext.Provider value={{ color: "grey", size: "50px"}}>
                    <ul className={"SocialNet"}>
                        <li className={"sn"}><FaFacebook/></li>
                        <li className={"sn"}><FaInstagram/></li>
                        <li className={"sn"}><FaYoutube/></li>
                    </ul>
                </IconContext.Provider>
            </div>
        );
    }
}