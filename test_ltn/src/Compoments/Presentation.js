import React from 'react';
import { IconContext } from "react-icons";
import { FaWarehouse, FaYoutube, FaMusic, FaCubes, FaDatabase, FaPlay } from 'react-icons/fa';

export default class Presentation extends React.Component {
    render() {
        return (
            <div className={"container pre"}>
                <h3>Présentation</h3>
                <hr/>
                <div className={"row"}>
                    <div className={"col-8"}>
                        <p>Créé en 2015 dans l'esprit du Hot Club de France, Dyslexic Swing & The Silent Brocoli re-dynamise le jazz manouche et le swing américain des jump bands avec une jubilation contagieuse et des références solides : le swing de Django et le swag de Grappelli ! </p>
                        <div className={"row"}>
                            <div className={"imgs"}>
                                <img className={"imgvideo"} alt={"img yb"} src={"https://img.youtube.com/vi/f2PA1grSHGg/0.jpg"} />
                                <p>When Hollywood Goes Black</p>
                            </div>
                            <div className={"imgs"}>
                                <img className={"imgvideo"} alt={"img yb"} src={"https://img.youtube.com/vi/W7NcC0CWl6I/0.jpg"} />
                                <p>Deed I Do</p>
                            </div>
                            <div className={"imgs"}>
                                <img className={"imgvideo"} alt={"img yb"} src={"https://img.youtube.com/vi/pfDhuoyD4nM/0.jpg"} />
                                <p>Teaser EP / Killin Jive</p>

                            </div>
                        </div>
                    </div>
                    <div className={"col-4"}>
                    <div className={"infosPra col"} >
                        <h4>Informations pratiques</h4>
                        <div className={"borderLeft"}>
                            <IconContext.Provider value={{ color: "#09d3ac"}}>
                                <p><FaWarehouse/> Paris, France (peut se déplacer)</p>
                                <p><FaPlay/> Jazz / Guinguette</p>
                                <p><FaDatabase/> Reprise: Oui</p>
                                <p><FaCubes/> Matériel: Matériel d'amplification fourni</p>
                                <p><FaYoutube/> Chaine YouTube</p>
                                <p><FaMusic/> Lien vers le compte Soundcloud</p>
                            </IconContext.Provider>
                        </div>
                    </div>
                        <img className={"col gif"} alt={"img"} src={"https://res.cloudinary.com/dcyafbpoh/image/upload/v1554973129/gif-reassurance.gif"}/>
                    </div>
                </div>
            </div>
        );
    }
}