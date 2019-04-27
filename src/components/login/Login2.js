import React from 'react';
import './Login.css';
const stylPierwszy = {

  };



  const stylDrugi = {
    color: 'transparent',
     textShadow: '0 0 8px rgba(255,255,255,0.5)'
  };

const eye = {
    otwarte: require('../images/eye_opened.svg'),
    zamkniete: require('../images/eye_closed.svg')
}

let eyes ={nic: 0};
let stylik={};
export default class Kyky extends React.Component {
state = {showPass:0, dupa:4,a:1,b:1, eyes: require('../images/eye_opened.svg') };



Funkcja = () => {
    if (this.state.showPass===1) { this.setState({showPass:0})}
    else { this.setState({showPass:1})}
    if (this.state.showPass===1) {stylik=stylPierwszy} else {stylik=stylDrugi}
    if (this.state.showPass===1) {eyes=eye.otwarte} else {eyes=eye.zamkniete}
  };


render()
{

if (eyes.nic===0) {eyes=eye.otwarte}
return(

<div className="loginPopup">

    <div className="logowanie">
    <img src={require ('../images/logo.svg')} alt="dupa" className="logoObrazek"></img>
        <input type="text" className="userField" placeholder="Użytkownik"></input>
        <div className="passwordFieldBG">
            <input type="text" className="passwordField" placeholder="Hasło" style={stylik}></input><a href="javascript:void(0)" onClick={this.Funkcja}><img src={eyes} alt="nic"className="eye"></img></a>
        </div>

        <div className="loginButton">
        <a href="/" className="zaloguj"><p className="loginText">Zaloguj</p></a>
            </div>


    </div>
    <div className="logowka"><p><b>tu jeszcze nic nie ma</b></p></div>

</div>
);
};

}

