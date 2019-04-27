
import React, { Component } from 'react'
import './Pcbar.css'
let a;
class PcBar extends React.Component {
    state ={show: null,
            drawerClasses: 'side-drawer',
            a: 1,
            b:1,
            }
    props = {show: null}
   zmianaEkranu(a) {
      this.props.zmienianie(a);
    }
  render() {
              if (this.state.show) {
              this.setState({drawerClasses: 'side-drawer open'});
                                    }
    return (
        <nav className="pcbar">
        <ul>
            <a href="javascript:void(0)" className="linki" id="1" onClick={()=>{this.zmianaEkranu(10)}}>Twoje podsumowanie</a><br/>
            <a href="javascript:void(0)" className="linki" id="1" onClick={()=>{this.zmianaEkranu(11)}}>Wypożycz urządzenie</a><br/>
            <a href="javascript:void(0)" className="linki" id="1" onClick={()=>{this.zmianaEkranu(12)}}>Twoje wypożyczenia</a><br/>
            <a href="javascript:void(0)" className="linki" id="1" onClick={()=>{this.zmianaEkranu(13)}}>Prośby przychodzące</a><br/>
            <a href="javascript:void(0)" className="linki" id="1" onClick={()=>{this.zmianaEkranu(14)}}>Poproś o przekazanie</a><br/>
            <a href="javascript:void(0)" className="linki" id="1" onClick={()=>{this.zmianaEkranu(15)}}>Historia Twoich wypożyczeń</a><br/>
            <a href="javascript:void(0)" className="linki" id="1" onClick={()=>{this.zmianaEkranu(16)}}>Historia urządzeń</a><br/>
            <a href="javascript:void(0)" className="linki" id="1" onClick={()=>{this.zmianaEkranu(17)}}>Dodawanie urządzeń</a><br/>
            <a href="javascript:void(0)" className="linki" id="1" onClick={()=>{this.zmianaEkranu(18)}}>Wypożyczenia firmowe</a>
        </ul>
    </nav>
    )
  }
}

export default PcBar;