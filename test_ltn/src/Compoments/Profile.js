import React from 'react';

export default class Profile extends React.Component {
    render() {
        return (
            <div>
                <img className={"imgProfile"} alt={"img"} src={"https://res.cloudinary.com/dcyafbpoh/image/upload/f_auto,g_auto,q_auto:eco/lua8sjrrejp3qi7a76fs"}/>
                <div className={"details row"} >
                    <img className={"imgDetail"} alt={"img"} src={"https://res.cloudinary.com/dcyafbpoh/image/upload/c_fill,f_auto,g_face,h_200,q_auto,w_250/kg4hu0apoumxozfjw7mh"}/>
                    <div className={"infos"} >
                        <h3 className={"name"}>Dyslexic Swing & The Silent Brocoli</h3>
                        <p>Jazz / Guinguette<br/>
                            5/5<br/>
                            à partir de 790 €
                        </p>
                        <button type="button" className="btn btn-outline-light">Reserver</button>
                    </div>
                </div>
            </div>
        );
    }
}