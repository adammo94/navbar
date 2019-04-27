import React, { Component } from 'react'

import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer2 from './components/SideDrawer/SideDrawer2'
import Backdrop from './components/Backdrop/Backdrop'
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import KykyCyk from './components/login/Login2';
import PcBar from './components/Pcbar';
class App extends Component {
  constructor(props) {
    super(props);
    /*var handleToUpdate = this.handleToUpdate.bind(this);*/
  }
  state = {
    sideDrawerOpen: false,
    zmienna: 0,
    logged_status: 0,
    czy_zalogowany: 1
  }
  handleToUpdate(someArg) {
    this.setState({zmienna:someArg})
  }

   zmienianie(someArg) {
    this.setState({zmienna:someArg})
  }

  handleToUpdte(someArg) {
    this.setState({logged_status:someArg})
  }
changeComp() {
  if (this.state.zmienna===1 && this.state.czy_zalogowany===1){
    return <KykyCyk/>
  }
  if (this.state.zmienna===10){
    return <Component2 />
  }
  if (this.state.zmienna===3 && this.state.is_logged===1){
    return <Component3 />
  }
  if (this.state.zmienna===4 && this.state.logged_status===1){
    return <Component4 />
  }
}
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop
    let sideDrawer
        if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
      sideDrawer = <SideDrawer2 />
    }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar
        drawerClickHandler={this.drawerToggleClickHandler}
        handleToUpdate={this.handleToUpdate.bind(this)}
        handleToUpdte={this.handleToUpdte.bind(this)}/>
        <PcBar zmienianie={this.zmienianie.bind(this)}/>
        {sideDrawer}
        {backdrop}

        {this.changeComp()}

      </div>
    )
  }
}

export default App