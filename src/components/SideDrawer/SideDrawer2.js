
import React, { Component } from 'react'
import './SideDrawer.css'
let a=1;
    let b=1;
class SideDrawer2 extends Component {
    state ={ show: null, drawerClasses: 'side-drawer', a: 1, b:1}
    props = {show: null}
zmianaEkranu() {
  this.setState({a: 2});
}
  render() {
    if (this.state.show) {
      this.setState({drawerClasses: 'side-drawer open'});
  }
    return (
        <nav className={this.state.drawerClasses}>
        <ul>
            <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.zmianaEkranu()}>Twoje podsumowanie</a></li>
            <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.zmianaEkranu()}>Wypożycz urządzenie</a></li>
            <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.zmianaEkranu()}>Twoje wypożyczenia</a></li>
            <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.zmianaEkranu()}>Prośby przychodzące</a></li>
            <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.zmianaEkranu()}>Poproś o przekazanie</a></li>
            <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.zmianaEkranu()}>Historia Twoich wypożyczeń</a></li>
            <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.zmianaEkranu()}>Historia urządzeń</a></li>
            <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.zmianaEkranu()}>Dodawanie urządzeń</a></li>
            <li><a href="javascript:void(0)" className="obramowanie" onClick={()=> this.zmianaEkranu()}>Wypożyczenia firmowe</a></li>
        </ul>
    </nav>
    )
  }
}

export default SideDrawer2;