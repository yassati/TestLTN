import React from 'react';
import { IconContext } from "react-icons";
import { FaUsers, FaClock, FaEuroSign } from 'react-icons/fa';

export default class Services extends React.Component {
    render() {
        return (
            <div className={"container"}>
                <h3>Prestations standards</h3>
                <hr/>
                <div>
                    <h5 className={"titleService"}>Dyslexic Swing Duo</h5>
                    <div className={"row service"}>
                        <div className={"col-5"}>
                            <p>Formation appréciée pour les réunions en petit comité, le DUO s'adapte au format de votre événement : présence musicale discrète ou dialogue amical avec vos invités. Formation : guitare + violon ou duo de guitaristes. 2 sets de 45 min (230 € par set supplémentaire).
                                <br/>
                                <br/>
                                Boissons et nourriture appréciées</p>
                        </div>
                        <div className={"col-5"}>
                            <IconContext.Provider value={{ color: "#09d3ac", size: "50px"}}>
                                <div className={"row"}>
                                    <div className={"col-4"}>
                                        <FaUsers/>
                                        <p>2 musiciens</p>

                                    </div>
                                    <div className={"col-4"}>
                                        <FaClock/>
                                        <p>1 heure et 30 minutes</p>
                                    </div>
                                    <div className={"col-4"}>
                                        <FaEuroSign/>
                                        <p>à partir de 790 € </p>
                                    </div>
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className={"col-2"}>
                            <button type="button" className="btn btn-success">Contacter</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className={"titleService"}>Dyslexic Swing  Trio</h5>
                    <div className={"row service"}>
                        <div className={"col-5"}>
                            <p>Formation d’origine, le TRIO convient à tous types d’événements (cocktail, soirée dansante, concert public). Dans cette configuration les musiciens, tous chanteurs, intègrent à leur répertoire les grands succès vocaux des Andrews Sisters, The Chordettes, Cats & The Fiddle, etc. Formation : duo guitaristes + violon. 2 sets de 45 min (350 € par set supplémentaire).
                                <br/>
                                <br/>
                                Boissons et nourriture appréciées</p>
                        </div>
                        <div className={"col-5"}>
                            <IconContext.Provider value={{ color: "#09d3ac", size: "50px"}}>
                                <div className={"row"}>
                                    <div className={"col-4"}>
                                        <FaUsers/>
                                        <p>3 musiciens</p>

                                    </div>
                                    <div className={"col-4"}>
                                        <FaClock/>
                                        <p>2 heures</p>
                                    </div>
                                    <div className={"col-4"}>
                                        <FaEuroSign/>
                                        <p>à partir de 1170 € </p>
                                    </div>
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className={"col-2"}>
                            <button type="button" className="btn btn-success">Contacter</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className={"titleService"}>Dyslexic Swing Duo</h5>
                    <div className={"row service"}>
                        <div className={"col-5"}>
                            <p>En formation Quartet, le Trio est complété par la majestueuse contrebasse qui vient apporter l'assise rythmique et la profondeur sonore. La formule idéale pour faire danser vos invités !
                                Formation : 2 guitares/Voix/Violons & Contrebasse
                                2 Sets de 45 min
                                <br/>
                                <br/>
                                Boissons et nourriture appréciées</p>
                        </div>
                        <div className={"col-5"}>
                            <IconContext.Provider value={{ color: "#09d3ac", size: "50px"}}>
                                <div className={"row"}>
                                    <div className={"col-4"}>
                                        <FaUsers/>
                                        <p>4 musiciens</p>

                                    </div>
                                    <div className={"col-4"}>
                                        <FaClock/>
                                        <p>1 heure et 30 minutes</p>
                                    </div>
                                    <div className={"col-4"}>
                                        <FaEuroSign/>
                                        <p>à partir de 1530 € </p>
                                    </div>
                                </div>
                            </IconContext.Provider>
                        </div>
                        <div className={"col-2"}>
                            <button type="button" className="btn btn-success">Contacter</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}