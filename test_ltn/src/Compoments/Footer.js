import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className={"footer"}>
                <div className={"container fo"}>
                    <div className={"row"}>
                        <div className={"col-3"}>
                            <h5>Musiciens/DJs par type d'événements</h5>
                            <p>Soirée Entreprise<br/>
                                Cocktail<br/>
                                Mariage<br/>
                                Anniversaire<br/>
                                Bar Restaurant<br/>
                                Bar Mitzvah / Bat Mitsvah<br/>
                                Maison Retraite
                            </p>
                        </div>
                        <div className={"col-3"}>
                            <h5>Musiciens/DJs par genre</h5>
                            <p>
                                Jazz, Jazz Manouche, Swing, Soul<br/>
                                Blues, Rock, Pop<br/>
                                Classique / Orchestre<br/>
                                Country, Folk, Indie<br/>
                                DJs<br/>
                                Pianistes<br/>
                                Saxophonistes<br/>
                                Guinguette<br/>
                                Choeur, Chorale, Gospel<br/>
                                Musique Irlandaise<br/>
                                The Voice, Nouvelle Star, Emission TV<br/>
                                Orchestre Prestige<br/>
                                Musicien-chanteurs en solo
                            </p>
                        </div>
                        <div className={"col-3"}>
                            <h5>Musiciens/DJs par ville</h5>
                            <p>
                                Paris, Lyon, Toulouse, Brest,
                                Bordeaux, Caen, Clermont-Ferrand,
                                Dijon, Lille, Marseille, Montpellier,
                                Nantes, Nice, Rennes, Strasbourg,
                                Tours, Rouen, Genève, Bruxelles,
                                Corse
                            </p>
                        </div>
                        <div className={"col-3"}>
                            <h5>Utile</h5>
                            <p>
                                Blog<br/>
                                A propos / Presse<br/>
                                On recrute !<br/>
                                Concerts<br/>
                                Devis pour un groupe de musique<br/>
                                Questions fréquentes public<br/>
                                Questions fréquentes musiciens<br/>
                                Mentions légales & Contact<br/>
                            </p>
                        </div>
                    </div>
                    <div className={"col text-center"}>
                        <h3>Ils nous accompagnent ...</h3>
                    </div>
                    <div className={"row imgsFooter"}>
                        <img className={"imgFooter1 mx-auto"} alt={"img"} src="https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,e_grayscale,f_auto,q_auto:low,w_80/logo104f.png"/>
                        <img className={"imgFooter2 mx-auto"} alt={"img"} src="https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,e_grayscale,f_auto,q_auto:low,w_180/logo-rep.png"/>
                    </div>
                </div>
            </footer>
        );
    }
}