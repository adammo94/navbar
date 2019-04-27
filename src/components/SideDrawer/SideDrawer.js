import React from 'react';
import './SideDrawer.css'

const sideDrawer = props => {
let drawerClasses =['side-drawer'];
if (props.show) {
    drawerClasses = ['side-drawer open'];
}
    return(
<nav className={drawerClasses}>
    <ul>
        <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.logowanie()}>>Twoje podsumowanie</a></li>
        <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.logowanie()}>>Wypożycz urządzenie</a></li>
        <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.logowanie()}>>Twoje wypożyczenia</a></li>
        <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.logowanie()}>>Prośby przychodzące</a></li>
        <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.logowanie()}>>Poproś o przekazanie</a></li>
        <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.logowanie()}>Historia Twoich wypożyczeń</a></li>
        <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.logowanie()}>Historia urządzeń</a></li>
        <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.logowanie()}>Dodawanie urządzeń</a></li>
        <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.logowanie()}>Wypożyczenia firmowe</a></li>
    </ul>
</nav>
);
};

export default sideDrawer;