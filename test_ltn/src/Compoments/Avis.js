import React from 'react';
import { IconContext } from "react-icons";
import { FaStar } from 'react-icons/fa';

export default class Avis extends React.Component {
    render() {
        return (
            <div className={"container"}>
                <h3>Avis</h3>
                <hr/>
                <div className={"avis"}>
                    <div className={"row"}>
                        <div className={"row"}>
                            <IconContext.Provider value={{ color: "#09d3ac", size: "25px"}}>
                                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> <p> 5.0 - 3 avis</p>
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-2 ava"}>
                            <img className="avatar" alt={"img"} src="https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,f_auto,g_auto,h_80,q_auto:eco,w_80/elvis.png"/>
                            <div><em>Profil anonyme</em></div>
                        </div>
                        <div className={"col-10"}>
                            <p>Super prestation ! Je recommande !</p>
                            <div className={"row"}>
                                <IconContext.Provider value={{ color: "#09d3ac"}}>
                                    <p>janvier 2019 - </p> <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"avis"}>
                    <div className={"row"}>
                        <div className={"col-2 ava"}>
                            <img className="avatar" alt={"img"}  src="https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,f_auto,g_auto,h_80,q_auto:eco,w_80/elvis.png"/>
                            <div><em>Profil anonyme</em></div>
                        </div>
                        <div className={"col-10"}>
                            <p>Un quatuor qui nous a enchanté de ses notes un très bon moment grâce à 4 talents qui en plus sont d une gentillesse et d un professionnalisme ! Je conseille vivement ! Un vrai plaisir ! Encore bravo !
                                Pour les futurs clients : adaptables , ponctuels, disponibles et à l écoute ; contrat réussi au delà de mes espérances ! Vous pourrez compter sur eux pour une soirée réussie .</p>
                            <div className={"row"}>
                                <IconContext.Provider value={{ color: "#09d3ac"}}>
                                    <p>juin 2019 - </p> <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"aviss"}>
                    <div className={"row"}>
                        <div className={"col-2 ava"}>
                            <img className="avatar" alt={"img"}  src="https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,f_auto,g_auto,h_80,q_auto:eco,w_80/elvis.png"/>
                            <div><em>Profil anonyme</em></div>
                        </div>
                        <div className={"col-10"}>
                            <p>Je souhaitais un groupe de jazz pour mes 60 ans et faire la surprise à mes invités. Tout le monde a adoré, et moi j'étais aux anges !!!! Super groupe, très sympa, très gentils et très professionnels. Une soirée inoubliable ! Encore Merci....</p>
                            <div className={"row"}>
                                <IconContext.Provider value={{ color: "#09d3ac"}}>
                                    <p>Avril 2019 - </p> <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}