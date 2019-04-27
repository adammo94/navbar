import React from 'react';
import './Login.css';
const Kyky = props => {
    var a=1;
    var b=1;
    var dupa;
    var inp = document.getElementsByClassName('passwordField');

    inp.addEventListener('select', function() {
      this.selectionStart = this.selectionEnd;
    }, false);
if (b===a){
return(

<div className="loginPopup">
    <div className="logowanie">
        <input type="text" className="userField" defaultValue="Użytkownik"></input>
        <div className="passwordFieldBG">
            <input type="text" className="passwordField" defaultValue="Hasło"></input><a href="/" onClick={()=>this.setState({ dupa: 3 })}><img src={require('../images/eye_opened.svg')} alt="nic"className="eye"></img></a><button className="przycisk" onClick={()=>this.setState({ zmienna: 3 })}></button>
            </div>

        <div className="loginButton">
        <a href="/" className="zaloguj"><p className="loginText">Zaloguj</p></a>
            </div>


    </div>
    <div className="logowka"><p><b>coś</b></p></div>
    <p>{dupa}</p>
</div>
);
};
};
export default Kyky;