import React from 'react';
import { IconContext } from "react-icons";
import { FaBirthdayCake } from 'react-icons/fa';
export default class Cagnotte extends React.Component {
    render() {
        return (
            <div className={"container pre"}>
                <div className={"row"}>
                    <h3>Cagnotte LiveTonight</h3>
                    <span className={"nouveau"}>nouveau</span>
                </div>
                <hr/>
                <div className={"row cagnotte"}>
                    <div className={"col-5"}>
                        <div className={"row"}>
                            <div className={"col-2"}>
                                <IconContext.Provider value={{ color: "#09d3ac", size: "50px"}}>
                                    <FaBirthdayCake/>
                                </IconContext.Provider>
                            </div>
                            <div className={"col-10"}>
                                <h3 className={"titleService"}>Dyslexic Swing & The Silent Brocoli</h3>
                                <p>Solliciter vos invités via un "chapeau digital" pour profiter d'une prestation musicale lors de votre événement.
                                    Le prix final sera fixé après discussion avec le musicien.</p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-5 "}>
                            <div className={"row"}>
                                <div className={"col-4"}>
                                    <h1>1.</h1>
                                    <p className={"textCagnotte"}>Contactez et échangez avec le musicien.</p>
                                </div>
                                <div className={"col-4"}>
                                    <h1>2.</h1>
                                    <p className={"textCagnotte"}>Partagez le lien de la cagnotte à vos invités.</p>
                                </div>
                                <div className={"col-4"}>
                                    <h1>3.</h1>
                                    <p className={"textCagnotte"}>Clôturez la cagnotte et profitez de votre soirée en musique !</p>
                                </div>
                            </div>
                    </div>
                    <div className={"col-2"}>
                        <p>Intéressé ? Contactez-nous à l'adresse suivante: booking@livetonight.fr</p>
                    </div>
                </div>
            </div>
        );
    }
}